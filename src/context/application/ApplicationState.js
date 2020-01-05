import React, { useReducer } from 'react';
import ApplicationContext from './applicationContext';
import applicationReducer from './applicationReducer';
import { ADD_APPLICATION, GET_APPLICATIONS } from '../types';
import uuid from 'uuid';

const ApplicationState = props => {
  const initialState = {
    applications: null,
    currentApplication: null,
    error: null
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  //Get Applications
  const getApplications = async () => {
    try {
      const data = [];

      dispatch({ type: GET_APPLICATIONS, payload: data });
    } catch (err) {}
  };

  //Add Application
  const addApplication = async application => {
    try {
      application['id'] = uuid.v4();
      console.log('in state', application);
      dispatch({ type: ADD_APPLICATION, payload: application });
    } catch (err) {}
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications: state.applications,
        currentApplication: state.currentApplication,
        getApplications,
        addApplication
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationState;
