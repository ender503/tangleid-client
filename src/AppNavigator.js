import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';

const hideHeaderOption = {
  header: null,
}

const routers = {
  Welcome: { screen: WelcomeScreen, navigationOptions: hideHeaderOption }
}

const stackConfig = {
  initialRouteName: 'Welcome'
}

const RootNavigator = createStackNavigator(routers, stackConfig);

export { RootNavigator };