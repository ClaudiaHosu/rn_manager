import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';


export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value}
  };
}

export const employeeCreate = ({name, phone, shift}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    //`` are string interpolations; they replace variables inside strings
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      //reset the entire view stack
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE});
        Actions.reset("main");
      });
  }
};
