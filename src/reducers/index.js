import {combineReducers} from 'redux';
import userReducer from './userReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    userState: userReducer,
    articleState: articleReducer,
    commentState: commentReducer,
})

export default rootReducer;