import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Snackbar} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ReactDOM from "react-dom";
import Home from "../pages/Home";

//Global cookie identifier
const COOKIE_ID = "_RPU_0310_pm";

function isCookieAccepted(){
    let cookies = document.cookie;
    return cookies.includes(COOKIE_ID);
}

function acceptCookieTerms(){
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = COOKIE_ID + "=" + d.getMilliseconds() + ";" + expires + ";path=/"
}

export default function CookieMessage(){
        const [open, setOpen] = React.useState(!isCookieAccepted());

        useEffect(() => {
           var cookies = document.cookie;

    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        acceptCookieTerms();
        setOpen(false);
    };

    return (
            <React.Fragment>
                <CssBaseline/>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={open}
                    onClose={handleClose}
                    message="Táto stránka používa súbory cookies. Prehliadaním stránky vyjadrujete súhlas s ich používaním."
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                Zatvoriť
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small"/>
                            </IconButton>
                        </React.Fragment>
                    }></Snackbar>
            </React.Fragment>
        )
    }


if (document.getElementById('cookie')) {
    ReactDOM.render(<CookieMessage />, document.getElementById('cookie'));
}
