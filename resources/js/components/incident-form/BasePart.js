import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import {label} from "./EmployeePart";

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

    renderContent(classes) {
    }
}
