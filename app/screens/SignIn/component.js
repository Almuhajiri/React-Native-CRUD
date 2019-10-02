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
    };
  }

  _signUp = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  _forgetPass = () => {
    const {navigation} = this.props;
    navigation.navigate('');
  };

  _signIn = async () => {
    const {email, password} = this.state;
    const params = {email, password};
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.logoContainer}>
          <Image source={IMAGES.logo} style={styles.logoStyle} />
          <Text style={styles.titleStyle}>Please Sign In To Continue</Text>
        </View>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.inputContainer}>
          <TextInput
            editable
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
        </View>
        <View style={styles.margin} />
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle} onPress={this.signIn}>
                Sign In
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.margin} />
        <View style={styles.createAccount}>
          <Text>Don't have an account?</Text>
          <Text style={styles.signUpTitle} onPress={this._signUp}>
            Sign-Up
          </Text>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
