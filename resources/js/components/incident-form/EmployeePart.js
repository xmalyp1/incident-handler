import React from "react";
import {Grid, withStyles} from "@material-ui/core";
import BasePart from "./BasePart";

export const label = 'Údaje o zamestancovi';


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


class EmployeePart extends BasePart {

    renderContent() {
        return (
            <Grid container spacing={5}>
                {this.renderItem({
                    name: 'firstName',
                    label: 'Krstné Meno',
                    autoComplete: 'given-name',
                    required: true,
                })}
                {this.renderItem({
                    name: 'lastName',
                    label: 'Priezvisko',
                    autoComplete: 'family-name',
                    required: true,
                })}
                {this.renderItem({
                    name: 'birthDate',
                    label: 'Dátum narodenia',
                    className: this.props.classes.birthInput,
                    type: 'date',
                })}
                {this.renderItem({
                    name: 'personalId',
                    label: 'Rodné číslo',
                    required: true,
                })}
                {this.renderItem({
                    name: 'address1',
                    label: 'Adresa riadok č. 1',
                    autoComplete: 'shipping address-line1',
                    required: true,
                    marginDivider: true,
                    sm: 12,
                })}
                {this.renderItem({
                    name: 'address2',
                    label: 'Adresa riadok č. 2',
                    autoComplete: 'shipping address-line2',
                    sm: 12,
                })}
                {this.renderItem({
                    name: 'city',
                    label: 'Mesto',
                    autoComplete: 'shipping address-level2',
                    required: true,
                })}
                {this.renderItem({
                    name: 'zip',
                    label: 'PSČ',
                    autoComplete: 'shipping postal-code',
                    required: true,
                })}
                {this.renderItem({
                    name: 'maritalStatus',
                    label: 'Rodinný stav',
                    itemSelector: 'status',
                    type: 'dropdown',
                    marginDivider: true,
                })}
                {this.renderItem({
                    name: 'numOfChildren',
                    label: 'Počet vyživovaných detí',
                    required: true,
                    type: 'number',
                    inputProps: {min: 0, max: 20},
                    marginDivider: true,
                })}
                {this.renderItem({
                    name: 'employedFrom',
                    label: 'Zamestnaný od',
                    className: this.props.classes.birthInput,
                    type: 'date',
                    marginDivider: true,
                })}
                {this.renderItem({
                    name: 'insuranceCompany',
                    label: 'Poisťovňa',
                    itemSelector: 'name',
                    type: 'dropdown',
                    marginDivider: true,
                })}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(EmployeePart);
