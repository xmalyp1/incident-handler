import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Snackbar} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';



  const useStyles = makeStyles((theme) => ({
      cookieMessage: {
          position: "fixed",
          width:"100%",
          bottom:0,
          left:0,
      },
    }));

export default function CookieMessage(){
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
            <React.Fragment>
                <CssBaseline/>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small"/>
                            </IconButton>
                        </React.Fragment>
                    }></Snackbar>
            </React.Fragment>
        )
    }

