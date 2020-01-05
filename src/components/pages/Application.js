import React from 'react';
import PropTypes from 'prop-types';
import ApplicationForm from '../application/ApplicationForm';
import ApplicationList from '../application/ApplicationList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    margin: 10,
    paddingTop: 5,
    minHeight: '600px',
    backgroundColor: '#fff'
  }
}));

const Application = props => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <ApplicationList />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <ApplicationForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

Application.propTypes = {};

export default Application;
