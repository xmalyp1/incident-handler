import React from "react";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export const label = 'Údaje o zamestancovi';


const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paperForm: {
        padding: theme.spacing(3),
    },
    birthInput: {
        marginTop: 0,
    },
    marginDivider: {
        marginTop: 10
    }
});


class EmployeePart extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    componentWillUnmount(){
        this.props.onComponentChange('personalData',Object.assign({},this.state));
    }

    handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleDatePickerChange(field) {
        return (date) => {
            this.setState({
                [field]: date,
            });
        }
    }

    render() {
        const { classes } = this.props;
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
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
                                value={this.state.lastName}
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
                                                    value={this.state.birthDate}
                                                    onChange={this.handleDatePickerChange('birthDate')}
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
                                name="personalId"
                                label="Rodné číslo"
                                onChange={this.handleInputChange}
                                value={this.state.personalId}
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
                                onChange={this.handleInputChange}
                                value={this.state.address1}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Adresa riadok č. 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                onChange={this.handleInputChange}
                                value={this.state.address2}
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
                                onChange={this.handleInputChange}
                                value={this.state.city}
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
                                onChange={this.handleInputChange}
                                value={this.state.zip}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.marginDivider}>
                            <FormControl fullWidth>
                                <InputLabel id="marital-status-label">Rodinný stav</InputLabel>
                                <Select
                                    labelId="marital-status-label"
                                    id="marital-status-select"
                                    onChange={this.handleInputChange}
                                    value={this.state.maritalStatus}>
                                    <MenuItem value="">
                                        <em>Neznámy</em>
                                    </MenuItem>
                                    {this.props.maritalStatus.map((status) => (
                                        <MenuItem key={status.status} value={status.status}>{status.status}</MenuItem>
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
                                onChange={this.handleInputChange}
                                value={this.state.numOfChildren}
                                inputProps={{
                                    min: 0,
                                    max: 20
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
                                                    onChange={this.handleDatePickerChange('employedFrom')}
                                                    value={this.state.employedFrom}
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
                                    id="insurance-company-select"
                                    onChange={this.handleInputChange}
                                    value={this.state.insuranceCompany}>
                                    <MenuItem value="">
                                        <em>Neznáma</em>
                                    </MenuItem>
                                    {this.props.insuranceCompany.map((company) => (
                                        <MenuItem key={company.name} value={company.name}>{company.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(EmployeePart);
