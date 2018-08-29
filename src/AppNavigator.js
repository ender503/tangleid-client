import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import CreateIdentityScreen from './screens/CreateIdentityScreen';
import HomeScreen from './screens/HomeScreen';

const hideHeaderOption = {
  header: null,
}

const routers = {
  Welcome: { screen: WelcomeScreen, navigationOptions: hideHeaderOption },
  CreateIdentity: { screen: CreateIdentityScreen, navigationOptions: hideHeaderOption },
  Home: { screen: HomeScreen, navigationOptions: hideHeaderOption },
}

const stackConfig = {
  initialRouteName: 'Welcome'
}

const RootNavigator = createStackNavigator(routers, stackConfig);

export { RootNavigator };