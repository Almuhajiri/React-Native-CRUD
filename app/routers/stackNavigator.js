import {StackNavigator} from 'react-navigation';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';

export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {tabBarVisible: false},
  },
);

export const ProfileStack = StackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {tabBarVisible: false},
  },
);
