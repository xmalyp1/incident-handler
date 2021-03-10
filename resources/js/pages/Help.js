import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Help(props){

    useEffect(() => {
        // Update the document title using the browser API
        document.title = props.title;
    });

        return (
            <React.Fragment>
                <CssBaseline/>
                <Box component="main">
                    <Typography component="h1" variant="h2" align="center" color="#fff" gutterBottom>
                        HELP PAGE
                    </Typography>
                    <Typography variant="h5" align="center" color="#fff" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et placerat augue. Quisque ut est magna. Vivamus nec gravida velit. Aliquam fringilla est lacus, id hendrerit sapien dapibus tempor.
                    </Typography>
                </Box>
            </React.Fragment>
        )
    }
