import React from "react";
import {Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Paper, Select, TextField,InputLabel} from "@material-ui/core";
import Item from "./Item";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker,  MuiPickersUtilsProvider} from '@material-ui/pickers';



export const label = 'Údaje o zamestancovi';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paperForm: {
        padding: theme.spacing(3),
    },
    birthInput:{
        marginTop:0,
    },
    marginDivider:{
        marginTop:10
    }
}));


export function EmployeePart(props) {
    const classes = useStyles();
    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
        <Paper className={classes.paperForm}>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Krstné Meno"
                    fullWidth
                    autoComplete="given-name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Priezvisko"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker fullWidth
                    className={classes.birthInput}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="birthDate"
                    label="Dátum narodenia"
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="personalId"
                    name="perosnalId"
                    label="Rodné číslo"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} className={classes.marginDivider}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Adresa riadok č. 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="address2"
                    name="address2"
                    label="Adresa riadok č. 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="Mesto"
                    fullWidth
                    autoComplete="shipping address-level2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="PSČ"
                    fullWidth
                    autoComplete="shipping postal-code"
                />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.marginDivider}>
                <FormControl fullWidth>
                    <InputLabel id="marital-status-label">Rodinný stav</InputLabel>
                    <Select
                        labelId="marital-status-label"
                        id="marital-status-select">
                        <MenuItem value="">
                            <em>Neznámy</em>
                        </MenuItem>
                        {props.maritalStatus.map((status) => (
                            <MenuItem value={status.status}>{status.status}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.marginDivider}>
                <TextField
                    required
                    id="numOfChildren"
                    name="numOfChildren"
                    label="Počet vyživovaných detí"
                    type="number"
                    InputProps={{
                        min:0,
                        max:20
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.marginDivider}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker fullWidth
                                        className={classes.birthInput}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="employedFrom"
                                        label="Zamestnaný od"
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.marginDivider}>
                <FormControl fullWidth>
                    <InputLabel id="insurance-company-label">Poisťovňa</InputLabel>
                    <Select
                        labelId="insurance-company-label"
                        id="insurance-company-select">
                        <MenuItem value="">
                            <em>Neznáma</em>
                        </MenuItem>
                        {props.insuranceCompany.map((company) => (
                            <MenuItem value={company.name}>{company.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        </Paper>
    </React.Fragment>
    );
}
