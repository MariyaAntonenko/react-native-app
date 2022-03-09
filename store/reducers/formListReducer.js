import {
  SET_FORMLIST,
  SET_SELECTED_FORM,
  ADD_FORM,
  ADD_FIELD,
  REMOVE_FIELD,
  ADD_FIELD_TYPE,
  ADD_FIELD_LABEL_PLACEHOLDER,
  SET_FORMLIST_WITH_SELECTEDFORM,
  SET_FILLED_FORMLIST,
} from '../types';

const initialState = {
  formList: [],
  filledFormList: [],
  selectedForm: {},
};

export const formListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORMLIST: {
      return {
        ...state,
        formList: action.payload,
      };
    }
    case ADD_FORM: {
      return {
        ...state,
        formList: [...state.formList, {id: Date.now(), fields: []}],
      };
    }
    case SET_SELECTED_FORM: {
      return {
        ...state,
        selectedForm: state.formList.find(item => item.id === action.payload),
      };
    }
    case ADD_FIELD: {
      return {
        ...state,
        selectedForm: {
          ...state.selectedForm,
          fields: [
            ...state.selectedForm.fields,
            {
              label: '',
              placeholder: '',
              type: 'username',
              fieldId: Date.now(),
            },
          ],
        },
      };
    }
    case REMOVE_FIELD: {
      return {
        ...state,
        selectedForm: {
          ...state.selectedForm,
          fields: state.selectedForm.fields.filter(
            field => field.fieldId !== action.id,
          ),
        },
      };
    }
    case ADD_FIELD_TYPE: {
      return {
        ...state,
        selectedForm: {
          ...state.selectedForm,
          fields: state.selectedForm.fields.map(field => {
            if (field.fieldId === action.id) {
              field.type = action.formType;
            }
            return field;
          }),
        },
      };
    }
    case ADD_FIELD_LABEL_PLACEHOLDER: {
      return {
        ...state,
        selectedForm: {
          ...state.selectedForm,
          fields: state.selectedForm.fields.map(field => {
            if (field.fieldId === action.id) {
              field[action.dataKey] = action.dataText;
            }
            return field;
          }),
        },
      };
    }
    case SET_FORMLIST_WITH_SELECTEDFORM: {
      return {
        ...state,
        formList: state.formList.map(form => {
          if (form.id === action.selectedForm.id) {
            return action.selectedForm;
          }
          return form;
        }),
      };
    }
    case SET_FILLED_FORMLIST: {
      return {
        ...state,
        filledFormList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
