import React from "react";
import {Grid} from "@material-ui/core";
import Item from "./Item";

export const label = 'Údaje o zamestancovi';

export function EmployeePart() {
    return (
        <Grid container>
            <Item text="Krstné meno"/>
            <Item text="Priezvisko"/>
            <Item text="Dátum narodenia"/>
            <Item text="Rodné číslo"/>
            <Item text="Trvalý pobyt"/>
            <Item text="Rodinný stav"/>
            <Item text="Počet vyživovaných detí"/>
            <Item text="Zamestaný od"/>
            <Item text="Zdravotná poisťovňa"/>
        </Grid>
    );
}
