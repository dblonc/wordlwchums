import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer'
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';


const RootReducer = combineReducers({
    session,
    errors
});

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default RootReducer;