import React from "react";
import {Grid, Paper, TextField, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ScheduleIcon from '@material-ui/icons/Schedule';
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const label = 'Údaje o pracovnom úraze';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paperForm: {
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(6),
    },
    birthInput: {
        marginTop: 0,
    },
    marginDivider: {
        marginTop: 10
    }
});


class IncidentPart extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.initState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    componentWillUnmount() {
        this.props.onComponentChange('incidentData', Object.assign({}, this.state));
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
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    {label}
                </Typography>
                <Paper className={classes.paperForm}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker fullWidth
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="incidentDate"
                                                    label="Dátum úrazu"
                                                    value={this.state.incidentDate}
                                                    onChange={this.handleDatePickerChange('incidentDate')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker fullWidth
                                                    disableToolbar
                                                    variant="inline"
                                                    margin="normal"
                                                    id="incidentTime"
                                                    label="Čas úrazu"
                                                    placeholder="12:00"
                                                    mask="__:__ _M"
                                                    value={this.state.incidentDate}
                                                    keyboardIcon={<ScheduleIcon/>}
                                                    onChange={this.handleDatePickerChange('incidentDate')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker fullWidth
                                                    disableToolbar
                                                    variant="inline"
                                                    margin="normal"
                                                    id="workingFrom"
                                                    label="Pracovná doba od"
                                                    placeholder="08:00"
                                                    mask="__:__ _M"
                                                    value={this.state.workingFrom}
                                                    minutesStep={15}
                                                    keyboardIcon={<ScheduleIcon/>}
                                                    onChange={this.handleDatePickerChange('workingFrom')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker fullWidth
                                                    disableToolbar
                                                    variant="inline"
                                                    margin="normal"
                                                    id="workingTo"
                                                    label="Pracovná doba do"
                                                    placeholder="15:00"
                                                    mask="__:__ _M"
                                                    value={this.state.workingTo}
                                                    minutesStep={15}
                                                    keyboardIcon={<ScheduleIcon/>}
                                                    onChange={this.handleDatePickerChange('workingTo')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="workedHours"
                                name="workedHours"
                                label="Počet odpracovaných hodín"
                                type="number"
                                onChange={this.handleInputChange}
                                value={this.state.workedHours}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="incidentLocation"
                                name="incidentLocation"
                                label="Miesto úrazu"
                                onChange={this.handleInputChange}
                                value={this.state.incidentLocation}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="affectedBodyPart"
                                name="affectedBodyPart"
                                label="Postihnutá časť tela"
                                onChange={this.handleInputChange}
                                value={this.state.affectedBodyPart}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="jobDescription"
                                name="jobDescription"
                                label="Druh vykonávanej práce"
                                onChange={this.handleInputChange}
                                value={this.state.jobDescription}
                                rows={3}
                                variant={'outlined'}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="incidentDescription"
                                name="incidentDescription"
                                label="Popis úrazu"
                                onChange={this.handleInputChange}
                                value={this.state.incidentDescription}
                                rows={10}
                                variant={'outlined'}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="witness"
                                name="witness"
                                label="Meno a priezvisko svedka"
                                onChange={this.handleInputChange}
                                value={this.state.witness}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="creator"
                                name="creator"
                                label="Zaznamenal"
                                onChange={this.handleInputChange}
                                value={this.state.creator}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Paper>
                {/*
                    <Grid container>
                    <Item text="Dátum úrazu"/>
                    <Item text="Hodina úrazu"/>
                    <Item text="Pracovná doba od/do"/>
                    <Item text="Počet odpracovaných hodín na smene"/>
                    <Item text="Miesto úrazu"/>
                    <Item text="Postihnutá časť tela"/>
                    <Item text="Druh vykonávanej práce"/>
                    <Item text="Popis úrazu"/>
                    <Item text="Meno a priezvisko svedka"/>
                    <Item text="Zaznamenal"/>
                </Grid>
                */}
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(IncidentPart);
