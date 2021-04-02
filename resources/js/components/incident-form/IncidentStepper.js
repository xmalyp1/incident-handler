import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/Forward';
import DescriptionIcon from '@material-ui/icons/Description';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import BasePart from "./BasePart";
import parts from './parts';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    resetButton: {
        float: "right",
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));

const INIT_DATE = new Date();
const STORAGE_KEY = 'INC_DATA';

const getDefaultValue = (type) => {
    switch (type) {
        case 'date':
        case 'time':
            return INIT_DATE;
        case 'number':
            return 0
        default:
            return '';
    }
}

const INIT_STATE = parts.reduce((data, part) => ({
    ...data,
    [part.name]: part.fields.reduce((state, field) => ({
        ...state,
        [field.value ?? field.name]: getDefaultValue(field.type)
    }), {})
}), {});

function getSteps() {
    return parts.map(e => e.label);
}


const storeDataToLocalStorage = (data) => {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } else {
        alert("Local Storage is not supported in this web browser. Therefore we are not persisting your data in the browser.")
    }
}

const getInitData = () => {
    if (typeof (Storage) !== "undefined") {
        let storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
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
    const [data, setData] = useState(getInitData());
    const steps = getSteps();

    const addDropdownItems = (field) => parts[0].fields.find(e => e.name === field).items = JSON.parse(props[field]);
    addDropdownItems('maritalStatus');
    addDropdownItems('insuranceCompany');

    const saveObjectPropertyToState = (subStep, instance) => {
        const state = Object.assign({}, data);
        state[subStep] = instance;
        storeDataToLocalStorage(state);
        setData(state);
    }

    const handleStateChange = (key, childState) => {
        const parentKeys = Object.keys(data)
        const updatedKey = parentKeys.find(value => value === key);
        console.debug("Searching " + key + " in " + parentKeys + " and found: " + updatedKey);

        if (typeof updatedKey !== 'undefined') {
            saveObjectPropertyToState(updatedKey, childState)
        } else {
            console.error("INCIDENT HANDLER ERROR : State has not been updated, because the key for update is undefined.")
        }
    }

    const isStepOptional = (step) => {
        return !!parts[step]?.optional;
    };

    const stepContent = (step) => {
        try {
            const part = parts[step];
            const name = part.name;
            return <BasePart initState={data[name]} dataKey={name} part={part} onComponentChange={handleStateChange}/>
        } catch (_) {
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
        if (typeof Storage !== "undefined") {
            localStorage.removeItem(STORAGE_KEY);
        }
        setData(getInitData());
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
                    </div>
                ) : (
                    <div>

                        <div className={classes.instructions}>
                            <Button onClick={handleReset} className={classes.resetButton} endIcon={<HighlightOffIcon/>}>
                                Zrušiť
                            </Button>
                            {stepContent(activeStep)}
                        </div>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Späť
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}>
                                    Vynechať krok
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                                endIcon={activeStep === steps.length - 1 ? <DescriptionIcon/> : <ForwardIcon/>}
                            >
                                {activeStep === steps.length - 1 ? 'Generovať dokumenty' : 'Ďalej'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
