import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ApplicationContext from '../../context/application/applicationContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const ApplicationForm = props => {
  const classes = useStyles();
  const applicationContext = useContext(ApplicationContext);

  const { addApplication } = applicationContext;

  const [application, setApplication] = useState(applicationObj);

  const {
    appName,
    agreementId,
    siteId,
    ipVersion,
    destinationIpFrom,
    destinationIpTo,
    portFrom,
    portTo
  } = application;

  useEffect(() => {
    console.log('use effect');
    setApplication(applicationObj);
  }, [applicationContext]);

  const onChange = e => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('in form 1', application.id);
    console.log('in form', application);
    addApplication(application);
  };

  return (
    <form autoComplete='off' onSubmit={onSubmit}>
      <Typography variant='h6' gutterBottom>
        Application
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              autoComplete='off'
              required
              name='appName'
              value={appName}
              label='Application Name'
              fullWidth
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='agreementId'
              label='Mobility Agreement Id'
              value={agreementId}
              fullWidth
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='siteId'
              label='Site Id'
              fullWidth
              value={siteId}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id='ip-version'>IP Version</InputLabel>
            <Select
              labelId='ip-version'
              name='ipVersion'
              value={ipVersion}
              onChange={onChange}
              className={classes.selectEmpty}
            >
              <MenuItem value='IPv4'>IPv4</MenuItem>
              <MenuItem value='IPv6'>IPv6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='destinationIpFrom'
              label='Destination IP From'
              value={destinationIpFrom}
              fullWidth
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='destinationIpTo'
              label='Destination IP To'
              fullWidth
              value={destinationIpTo}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='portFrom'
              label='Port From'
              value={portFrom}
              fullWidth
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              name='portTo'
              label='Port To'
              fullWidth
              value={portTo}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' variant='contained' color='primary'>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

ApplicationForm.propTypes = {
  appName: PropTypes.string.isRequired
};

const applicationObj = {
  id: null,
  appName: '',
  siteId: '',
  agreementId: '',
  ipVersion: 'IPv4',
  destinationIpFrom: '',
  destinationIpTo: '',
  portFrom: '',
  portTo: ''
};
export default ApplicationForm;
