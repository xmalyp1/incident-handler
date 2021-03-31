import React from 'react';
import Typography from "@material-ui/core/Typography";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField} from "@material-ui/core";
import {label} from "./EmployeePart";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default class BasePart extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    componentWillUnmount() {
        this.props.onComponentChange(this.props.dataKey, Object.assign({}, this.state));
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
                    {this.renderContent(classes)}
                </Paper>
            </React.Fragment>
        );
    }

    _renderTextField({name, label, autoComplete, required, type, inputProps, rows}) {
        return <TextField
            required={required}
            value={this.state[name]}
            onChange={this.handleInputChange}
            id={name}
            name={name}
            label={label}
            type={type}
            inputProps={inputProps}
            InputLabelProps={type === 'number' ? {shrink: true} : undefined}
            fullWidth
            multiline={!!rows}
            rows={rows}
            variant={rows ? 'outlined' : 'standard'}
            autoComplete={autoComplete}
        />;
    }

    _renderDatePicker({name, label, className}) {
        return <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker fullWidth
                                className={className}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id={name}
                                label={label}
                                onChange={this.handleDatePickerChange(name)}
                                value={this.state[name]}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
            />
        </MuiPickersUtilsProvider>;
    }

    _renderTimePicker({name, label, value, placeholder, minutesStep}) {
        return <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker fullWidth
                                disableToolbar
                                variant="inline"
                                margin="normal"
                                id={name}
                                label={label}
                                placeholder={placeholder}
                                mask="__:__ _M"
                                minutesStep={minutesStep}
                                value={this.state[name ?? value]}
                                keyboardIcon={<ScheduleIcon/>}
                                onChange={this.handleDatePickerChange(name ?? value)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
            />
        </MuiPickersUtilsProvider>;
    }

    _renderDropdown({name, label, itemSelector}) {
        const labelId = _.kebabCase(name + 'Label');
        return <FormControl fullWidth>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select labelId={labelId}
                    id={_.kebabCase(name + 'Select')}
                    onChange={this.handleInputChange}
                    inputProps={{
                        name: name
                    }}
                    value={this.state[name]}>
                <MenuItem value="">
                    <em>Neznámy</em>
                </MenuItem>
                {this.props[name].map(item => (
                    <MenuItem key={item[itemSelector]} value={item[itemSelector]}>{item[itemSelector]}</MenuItem>
                ))}
            </Select>
        </FormControl>;
    }

    _chooseItem({type, ...props}) {
        switch (type) {
            case 'date':
                return this._renderDatePicker(props);
            case 'time':
                return this._renderTimePicker(props);
            case 'dropdown':
                return this._renderDropdown(props);
            default:
                return this._renderTextField({type, ...props});
        }
    }

    renderItem({marginDivider = false, sm = 6, type, ...props}) {
        return <Grid item xs={12} sm={sm} className={marginDivider ? this.props.classes.marginDivider : undefined}>
            {this._chooseItem({type, ...props})}
        </Grid>;
    }

    renderContent(classes) {
    }
}
