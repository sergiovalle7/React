import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Zapatos</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Remeras</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Camisas</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} id="grids">
      <Grid container spacing={2} >
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
