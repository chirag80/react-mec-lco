import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../../context/application/applicationContext';

const ApplicationList = props => {
  const applicationContext = useContext(ApplicationContext);

  const { applications, getApplications } = applicationContext;

  useEffect(() => {
    getApplications();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {applications !== null ? (
        <ul>
          {applications.map(application => (
            <li key={application.id}>
              {application.appName}-{application.siteId}-{application.ipVersion}
            </li>
          ))}
        </ul>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

ApplicationList.propTypes = {};

export default ApplicationList;
