import { combineReducers } from 'redux';
import messageReducers from './messages';
import usernameReducers from './username';
import reactionsReducer from './reactions';

const rootReducer = () => {

}

export default combineReducers({
    messages: messageReducers,
    username: usernameReducers,
    reactions: reactionsReducer
});