import {combineReducers} from 'redux';
import {formListReducer} from './formListReducer';

export const rootReducer = combineReducers({
  formListReducer,
});
