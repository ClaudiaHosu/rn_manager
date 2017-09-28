/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
      const config = {
        apiKey: "AIzaSyDc-zl69tPjTpYOaJzvMP0Ya0Z5MSFplg8",
        authDomain: "manager-b8e24.firebaseapp.com",
        databaseURL: "https://manager-b8e24.firebaseio.com",
        projectId: "manager-b8e24",
        storageBucket: "manager-b8e24.appspot.com",
        messagingSenderId: "427729337307"
      };

      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
