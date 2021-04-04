import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import ReactDOM from "react-dom";
import IncidentStepper from "../components/incident-form/IncidentStepper";

const Incident = (props) => (
    <React.Fragment>
        <CssBaseline/>
        <Box component="main">
            <IncidentStepper {...props}/>
        </Box>
    </React.Fragment>
);

const propsContainer = document.getElementById("incident-props");
ReactDOM.render(<Incident {...propsContainer.dataset}/>, document.getElementById('incident'));
