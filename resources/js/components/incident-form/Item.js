import React from 'react';
import {Grid, TextField} from "@material-ui/core";

export default function(props) {
    return (
        <Grid item xs={2}>
            <TextField hintText={props.text}
                       onChange={e => console.log(e.target.value)}
                       floatingLabelText={props.text}
                       placeholder={props.text}
                       defaultValue=""/>
        </Grid>
    );
}
