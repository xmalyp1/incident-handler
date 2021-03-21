import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PaymentIcon from '@material-ui/icons/Payment';
import DescriptionIcon from '@material-ui/icons/Description';

import {
    Timeline, TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    storyLineContainer: {
        padding: theme.spacing(0, 18, 0, 18),
        width: "100%",
        height: 500,
        margin: theme.spacing(10, 0, 0, 0),
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function StoryLine() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators"
                 className={classes.storyLineContainer}>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot>
                                <LocalHospitalIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Pracovný úraz
                                </Typography>
                                <Typography>Nepríjemné udalosti Vás priviedli k nástroju, ktorý Vám urýchli birokraciu !</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <QuestionAnswerIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Vyplnenie údajov
                                </Typography>
                                <Typography>Pohodlne vyplňte všetky potrebné informácie o nešťastnej udalosti.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <PaymentIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Rýchla platba
                                </Typography>
                                <Typography>Proces dokončíte rýchlou platbou za Vami vybrané dokumenty.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <DescriptionIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Pripravené dokumenty
                                </Typography>
                                <Typography>Všetky potrebné dokumenty sme Vám odoslali na e-mail!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </React.Fragment>
    )

}
