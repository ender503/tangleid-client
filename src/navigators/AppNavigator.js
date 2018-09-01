import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';

const routers = {
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
}

const config = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;