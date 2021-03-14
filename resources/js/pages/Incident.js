import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import ReactDOM from "react-dom";
import IncidentStepper from "../components/incident-form/IncidentStepper";

export default function Incident(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Box component="main">
                <IncidentStepper/>
                {/*<Stepper children={EmployeePart}/>*/}
                {/*<IncidentForm/>*/}
            </Box>
        </React.Fragment>
    )
}


if (document.getElementById('incident')) {
    const propsContainer = document.getElementById("incident-props");
    const props = Object.assign({}, propsContainer.dataset);
    console.log(props);
    ReactDOM.render(<Incident {...props}/>, document.getElementById('incident'));
}
