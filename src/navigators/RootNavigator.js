import { createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const routers = {
  AuthLoading: { screen: AuthLoadingScreen },
  App: { screen: AppNavigator },
  Auth: { screen: AuthNavigator },
  
}

const config = {
  initialRouteName: 'AuthLoading'
}

const RootNavigator = createSwitchNavigator(routers, config);

export { RootNavigator };