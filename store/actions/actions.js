import {
  SET_SELECTED_FORM,
  SET_FILLED_FORMLIST,
  SET_FORMLIST,
  ADD_FORM,
  ADD_FIELD,
  REMOVE_FIELD,
  ADD_FIELD_TYPE,
  ADD_FIELD_LABEL_PLACEHOLDER,
  SET_FORMLIST_WITH_SELECTEDFORM,
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFormList = () => async dispatch => {
  const data = await AsyncStorage.getItem('form-list');
  data.then(res => dispatch(setFormList(JSON.parse(res) || [])));
};
export const saveFormList = (formList, key) => async dispatch => {
  let stringFormList = JSON.stringify(formList);
  await AsyncStorage.setItem(key, stringFormList);
  if (key === 'form-list') {
    dispatch(setFormList(formList));
  }
  dispatch(setFilledFormList(formList));
};

export const setFormList = formList => {
  return {
    type: SET_FORMLIST,
    payload: formList,
  };
};
export const setFilledFormList = formList => {
  return {
    type: SET_FILLED_FORMLIST,
    payload: formList,
  };
};
export const setSelectedForm = id => {
  return {
    type: SET_SELECTED_FORM,
    payload: id,
  };
};
export const addForm = () => {
  return {
    type: ADD_FORM,
  };
};
export const addField = () => {
  return {
    type: ADD_FIELD,
  };
};
export const removeField = id => {
  return {
    type: REMOVE_FIELD,
    id,
  };
};
export const addFieldType = (formType, id) => {
  return {
    type: ADD_FIELD_TYPE,
    formType,
    id,
  };
};
export const addFieldLabelPlaceholder = (dataKey, dataText, id) => {
  return {
    type: ADD_FIELD_LABEL_PLACEHOLDER,
    dataKey,
    dataText,
    id,
  };
};
export const setFormListWithSelectedForm = selectedForm => {
  return {
    type: SET_FORMLIST_WITH_SELECTEDFORM,
    selectedForm,
  };
};
