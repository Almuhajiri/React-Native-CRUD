import {SwitchNavigator} from 'react-navigation';
import {UserAuthStack, ProfileStack} from './stackNavigator';

export default SwitchNavigator(
  {
    SignIn: UserAuthStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'SignIn',
  },
);
