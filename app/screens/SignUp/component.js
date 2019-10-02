/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import IMAGES from '../../config/images';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      confirmpass: '',
    };
  }

  _signIn = () => {
    const {navigation} = this.props;
    navigation.navigate('SignIn');
  };

  _forgetPass = () => {
    const {navigation} = this.props;
    navigation.navigate('');
  };

  _signUp = async () => {
    const {email, password, username, confirmpass} = this.state;
    const params = {email, password, username, confirmpass};
  };

  render() {
    const {email, password, username, confirmpass} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.logoContainer}>
          <Image source={IMAGES.logo} style={styles.logoStyle} />
          <Text style={styles.titleStyle}>Sign Up and Join With Us :)</Text>
        </View>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.inputContainer}>
          <TextInput
            editable
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={username => this.setState({username})}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            value={confirmpass}
            onChangeText={confirmpass => this.setState({confirmpass})}
          />
        </View>
        <View style={styles.margin} />
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle} onPress={this.signIn}>
                Sign Up
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.createAccount}>
          <Text>Already have an account?</Text>
          <Text style={styles.signUpTitle} onPress={this._signIn}>
            Sign-In
          </Text>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
