import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const routers = {
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
  Challenge: { screen: ChallengeScreen },
  Profile: { screen: ProfileScreen},
  Confirmation: { screen: ConfirmationScreen },
}

const config = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;