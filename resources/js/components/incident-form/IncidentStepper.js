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
import {addDropdownItems, getInitData} from './data';
import * as localStorageUtils from '../../common/localStorageUtils';

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

export default function IncidentStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [data, setData] = useState(getInitData());

    addDropdownItems('maritalStatus', props);
    addDropdownItems('insuranceCompany', props);

    const handleStateChange = (key, childState) => {
        const state = {...data};
        state[key] = childState;
        localStorageUtils.storeData(state);
        setData(state);
    }

    const isStepOptional = (step) => !!parts[step]?.optional;
    const isStepSkipped = (step) => skipped.has(step);

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
        localStorageUtils.removeData();
        setData(getInitData());
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {parts.map(({label}, index) => {
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
                {activeStep === parts.length ? (
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
                            <BasePart data={data} part={parts[activeStep]} onComponentChange={handleStateChange}/>
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
                                endIcon={activeStep === parts.length - 1 ? <DescriptionIcon/> : <ForwardIcon/>}
                            >
                                {activeStep === parts.length - 1 ? 'Generovať dokumenty' : 'Ďalej'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
