import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactDOM from "react-dom";

export default function Incident(props){

        return (
            <React.Fragment>
                <CssBaseline/>
                <Box component="main">
                    <Typography component="h1" variant="h2" align="center" color="#fff" gutterBottom>
                        INCIDENT PAGE
                    </Typography>
                    <Typography variant="h5" align="center" color="#fff" component="p">
                        HEJLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et placerat augue. Quisque ut est magna. Vivamus nec gravida velit. Aliquam fringilla est lacus, id hendrerit sapien dapibus tempor.
                    </Typography>
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
