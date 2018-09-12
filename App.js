import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Config from 'react-native-config';

import configureStore from './src/utils/configureStore';
const { persistor, store } = configureStore();

import { RootNavigator } from './src/navigators/RootNavigator';
import PushService from './src/services/PushService';
import NavigationService from './src/services/NavigationService';
import { updatePushToken } from './src/actions';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onIds = this.onIds.bind(this);
    this.navigateToScreen = this.navigateToScreen.bind(this);
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
    if (notification.isAppInFocus) {
      this.navigateToScreen(notification);
    }
  }

  onOpened(openResult) {
    this.navigateToScreen(openResult.notification);
  }

  onIds(device) {
    store.dispatch(updatePushToken(device.userId));
  }

  navigateToScreen(notification) {
    const additionalData = notification.payload.additionalData;
    NavigationService.navigate('Confirmation', additionalData);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator
            style={{ flex: 1 }}
            ref={navigator => {
              NavigationService.setNavigator(navigator);
            }}/>
        </PersistGate>
      </Provider>
    );
  }
};
