import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmployeePart, {label as employeePartLabel} from './EmployeePart';
import IncidentPart, {label as incidentPartLabel} from './IncidentPart';
import {AdditionalQuestionsPart, label as additionalQuestionsPartLabel} from "./AdditionalQuestionsPart";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));

const INIT_DATE = new Date();
const STORAGE_KEY = 'INC_DATA';
const INIT_STATE = {
    "personalData":{
        "firstName":"",
        "secondName":"",
        "birthDate":INIT_DATE,
        "personalId":"",
        "address1":"",
        "address2":"",
        "city":"",
        "zip":"",
        "maritalStatus":"",
        "numOfChildren":0,
        "employedFrom":INIT_DATE,
        "insuranceCompany":""
    },
    "incidentData":{
        "incidentDate":INIT_DATE,
        "workingFrom":INIT_DATE,
        "workingTo":INIT_DATE,
        "workedHours":0,
        "incidentLocation":"",
        "affectedBodyPart":"",
        "jobDescription":"",
        "incidentDescription":"",
        "witness":"",
        "creator":""
    }
};

function getSteps() {
    return [employeePartLabel, incidentPartLabel, additionalQuestionsPartLabel];
}


const storeDataToLocalStorage = (data) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    } else {
        alert("Local Storage is not supported in this web browser. Therefore we are not persisting your data in the browser.")
    }
}

const getInitData = () => {
    if (typeof(Storage) !== "undefined") {
        let storedData = localStorage.getItem(STORAGE_KEY);
        if(storedData !== null){
            console.debug("Retrieving state from local storage");
            return JSON.parse(storedData);
        }
    }
    return INIT_STATE;
}

export default function IncidentStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [data,setData] = useState(getInitData());
    const steps = getSteps();

    const saveObjectPropertyToState = (subStep,instance) => {
        let state = Object.assign({},data);
        state[subStep] = instance;
        storeDataToLocalStorage(state);
        setData(state);
    }

    const handleStateChange = (key,childState) => {
        let parentKeys = Object.keys(data)
        let updatedKey = parentKeys.find(value => value === key);
        console.debug("Seaching "+ key + " in "+ parentKeys + " and found: "+updatedKey);

        if(typeof updatedKey !== 'undefined' ){
            saveObjectPropertyToState(updatedKey,childState)
        }else{
            console.error("INCIDENT HANDLER ERROR : State have not been updated, because the key for update is undefined.")
        }
    }

    const isStepOptional = (step) => {
        return step === 2;
    };

    const stepContent = (step, props) => {
        switch (step) {
            case 0:
                return <EmployeePart maritalStatus={JSON.parse(props.maritalStatus)}
                                     insuranceCompany={JSON.parse(props.insuranceCompany)}
                                     initState={data['personalData']}
                                     onComponentChange={handleStateChange}/>;
            case 1:
                return <IncidentPart initState={data['incidentData']}
                                     onComponentChange={handleStateChange}/>;
            case 2:
                return <AdditionalQuestionsPart/>;
            default:
                return 'Unknown step';
        }
    }


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <div className={classes.instructions}>
                            {stepContent(activeStep, props)}
                        </div>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}>
                                    Skip
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
