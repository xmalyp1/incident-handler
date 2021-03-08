import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';


  const useStyles = makeStyles((theme) => ({
        '@global': {
            ul: {
                margin: 0,
                padding: 0,
                listStyle: 'none',
            },
        },
        appBar: {
            //borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbar: {
            flexWrap: 'wrap',
        },
        toolbarTitle: {
            flexGrow: 1,
        },
        link: {
            color:theme.palette.common.white,
            margin: theme.spacing(1, 1.5),
        },
        homeIcon:{
            verticalAlign:"bottom",
        },
    }));

    export default function Navigation(){
        const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Registrácia pracovného úrazu
                        </Typography>
                        <nav>
                            <Link to="/" className={classes.link}>
                                <HomeIcon className={classes.homeIcon} />
                            </Link>
                            <Link to="/incident" className={classes.link}>
                                Registrácia úrazu
                            </Link>
                            <Link to="/help" className={classes.link}>
                                Podpora
                            </Link>
                        </nav>
                        <Button href="#" color="inherit" variant="outlined" className={classes.link}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }

