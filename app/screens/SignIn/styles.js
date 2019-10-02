import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoStyle: {
    width: 100,
    height: 100,
  },
  titleStyle: {
    fontSize: 18,
  },
  inputContainer: {
    width: 300,
    borderColor: '#F1F1F1',
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  input: {
    marginLeft: 10,
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 45,
    backgroundColor: '#9a32fd',
    borderRadius: 25,
  },
  buttonTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  createAccount: {
    alignItems: 'center',
  },
  signUpTitle: {
    color: '#0eb1d4',
  },
  margin: {
    margin: 10,
  },
});

export default styles;
