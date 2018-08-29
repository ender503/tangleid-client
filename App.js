import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './src/utils/configureStore';
const { persistor, store } = configureStore();

import { RootNavigator } from './src/navigators/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator style={{ flex: 1 }}/>
        </PersistGate>
      </Provider>
    );
  }
};
