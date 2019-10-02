import React, {Component} from 'react';
import Router from './app/routers';
import {Provider} from 'react-redux';
import store from './app/store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    );
  }
}
