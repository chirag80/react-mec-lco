import React from 'react';
import PropTypes from 'prop-types';
import PolicyForm from '../policy/PolicyForm';
import PolicyList from '../policy/PolicyList';
import PolicyApplicationList from '../policy/PolicyApplicationList';

const Policy = props => {
  return (
    <>
      <PolicyForm />
      <PolicyList />
      <PolicyApplicationList />
    </>
  );
};

Policy.propTypes = {};

export default Policy;
