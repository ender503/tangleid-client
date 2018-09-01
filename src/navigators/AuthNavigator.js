import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import CreateIdentityScreen from '../screens/CreateIdentityScreen';

const routers = {
  Welcome: { screen: WelcomeScreen },
  CreateIdentity: { screen: CreateIdentityScreen },
}

const config = {
  initialRouteName: 'Welcome',
  headerMode: 'none',
}

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;