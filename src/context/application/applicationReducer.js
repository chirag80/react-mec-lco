import { ADD_APPLICATION, GET_APPLICATIONS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload
      };
    case ADD_APPLICATION:
      return {
        ...state,
        applications: [action.payload, ...state.applications]
      };
    default:
      return state;
  }
};
