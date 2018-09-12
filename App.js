import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Config from 'react-native-config';

import configureStore from './src/utils/configureStore';
const { persistor, store } = configureStore();

import { RootNavigator } from './src/navigators/RootNavigator';
import PushService from './src/services/PushService';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onIds = this.onIds.bind(this);
  }

  componentWillMount() {
    PushService.init(Config.ONESIGNAL_APP_ID);
    PushService.bindHandler(this);
    PushService.configure();
  }

  componentWillUnmount() {
    PushService.unbindHandler(this);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

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
