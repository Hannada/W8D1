import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../../actions/session_actions";


const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      errors = null;  
      return errors;
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, {[action.errors]: errors})
    default:
      return oldState;
  }
}; 

export default sessionErrorsReducer;