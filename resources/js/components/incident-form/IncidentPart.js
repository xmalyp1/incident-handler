import React from "react";
import {Grid, withStyles} from "@material-ui/core";
import BasePart, {useStyles} from "./BasePart";

export const label = 'Údaje o pracovnom úraze';

export default withStyles(useStyles)(class extends BasePart {
    renderContent() {
        return (
            <Grid container spacing={5}>
                {this.renderItem({
                    name: 'incidentDate',
                    label: 'Dátum úrazu',
                    type: 'date',
                    sm: 3,
                })}
                {this.renderItem({
                    name: 'incidentTime',
                    value: 'incidentDate',
                    label: 'Čas úrazu',
                    placeholder: '12:00',
                    type: 'time',
                    sm: 3,
                })}
                {this.renderItem({
                    name: 'workingFrom',
                    label: 'Pracovná doba od',
                    placeholder: '08:00',
                    minutesStep: 15,
                    type: 'time',
                    sm: 3,
                })}
                {this.renderItem({
                    name: 'workingTo',
                    label: 'Pracovná doba do',
                    placeholder: '15:00',
                    minutesStep: 15,
                    type: 'time',
                    sm: 3,
                })}
                {this.renderItem({
                    name: 'workedHours',
                    label: 'Počet odpracovaných hodín',
                    type: 'number',
                    sm: 4,
                })}
                {this.renderItem({
                    name: 'incidentLocation',
                    label: 'Miesto úrazu',
                    required: true,
                    sm: 4,
                })}
                {this.renderItem({
                    name: 'affectedBodyPart',
                    label: 'Postihnutá časť tela',
                    required: true,
                    sm: 4,
                })}
                {this.renderItem({
                    name: 'jobDescription',
                    label: 'Druh vykonávanej práce',
                    required: true,
                    rows: 3,
                    sm: 12
                })}
                {this.renderItem({
                    name: 'incidentDescription',
                    label: 'Popis úrazu',
                    required: true,
                    rows: 10,
                    sm: 12
                })}
                {this.renderItem({
                    name: 'witness',
                    label: 'Meno a priezvisko svedka',
                    required: true,
                })}
                {this.renderItem({
                    name: 'creator',
                    label: 'Zaznamenal',
                    required: true,
                })}
            </Grid>
        );
    }
});
