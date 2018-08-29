import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const routers = {
  Home: { screen: HomeScreen },
}

const config = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;