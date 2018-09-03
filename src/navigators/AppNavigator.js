import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const routers = {
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
  Challenge: { screen: ChallengeScreen },
  Profile: { screen: ProfileScreen},
}

const config = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;