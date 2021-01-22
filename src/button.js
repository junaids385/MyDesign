import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { grey, blueGrey, blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {

        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: blue,
        background: 'grey',
    },
}));

function Button() {
    const classes = useStyles();

    return (
        <div id="btnp">

            <Grid className={classes.root} container spacing={6}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>Undo Batch</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>Assign Supplier</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>Assign Supplier</Paper>
                </Grid>

            </Grid>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>

        </div>
    )
}

export default Button
