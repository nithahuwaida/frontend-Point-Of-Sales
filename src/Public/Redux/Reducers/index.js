import { combineReducers } from 'redux';
import product from './product';
import login from './login';
import register from './register';
import category from './category';
import user from './user';

const appReducer = combineReducers({
    product,login,register,category,user,
});

export default appReducer;