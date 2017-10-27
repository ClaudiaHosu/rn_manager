import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'Jane'}
      // [ ] here is not an array, it's 'key interpolation', it's replaced by the name of the property
      return {...state, [action.payload.prop]: action.payload.value}
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
        return state;
  }
}
