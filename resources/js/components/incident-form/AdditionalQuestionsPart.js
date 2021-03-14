import React from "react";
import Item from "./Item";
import {Grid} from "@material-ui/core";

export const label = 'Dotazník detailov';

export function AdditionalQuestionsPart() {
    return (
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
    );
}
