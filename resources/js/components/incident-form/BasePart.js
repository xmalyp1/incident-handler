import React from 'react';
import Typography from "@material-ui/core/Typography";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, withStyles} from "@material-ui/core";
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ScheduleIcon from "@material-ui/icons/Schedule";


export default withStyles(theme => ({
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
}))
(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data[props.part.name];
        this.handleInputChange = this.handleInputChange.bind(this);
        this.findField = this.findField.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    componentWillUnmount() {
        this.props.onComponentChange(this.props.part.name, {...this.state});
    }

    handleInputChange(event) {
        const {name, v} = event.target;
        const updateValueFunc = this.findField(name).updateValue;
        const value = !!updateValueFunc ? updateValueFunc(v) : v;

        this.setState({
            [name]: value
        });
    }

    findField(name) {
        return this.props.part.fields.find(e => e.name === name);
    }

    handleDatePickerChange(field) {
        return (date) => {
            this.setState({
                [field]: date,
            });
        }
    }

    render() {
        return <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {this.props.part.label}
            </Typography>
            <Paper className={this.props.classes.paperForm}>
                {this._renderContent()}
            </Paper>
        </React.Fragment>;
    }

    _renderContent() {
        return <Grid container spacing={5}>
            {this.props.part.fields.map(field => this._renderField(field))}
        </Grid>;
    }

    _renderField({marginDivider = false, sm = 6, name, ...props}) {
        return <Grid item
                     xs={12}
                     sm={sm}
                     className={marginDivider ? this.props.classes.marginDivider : undefined}
                     key={name}>
            {this._chooseItem({name, ...props})}
        </Grid>;
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

    _renderDatePicker({name, label, birthInput}) {
        return <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker fullWidth
                                className={birthInput ? this.props.classes.birthInput : undefined}
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

    _renderDropdown({name, label, itemSelector, items}) {
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
                {items?.map(item =>
                    <MenuItem key={item[itemSelector]} value={item[itemSelector]}>{item[itemSelector]}</MenuItem>
                )}
            </Select>
        </FormControl>;
    }

    _renderTextField({name, label, autoComplete, required, type, inputProps, rows, error}) {
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
            error={!!error && error(this.state[name], this.state)}
        />;
    }
});
