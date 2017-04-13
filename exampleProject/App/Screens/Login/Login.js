'use strict';

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Text
 } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { login } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const width = Dimensions.get('window').width;

const lockIcon = require("../../Images/Login/locked.png");
const userIcon = require("../../Images/Login/avatar.png");

class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // TODO: TOKEN VALIDATION
    // if (this.props.user.isLoggedIn) {
    //   API.accessToken = this.props.user.accessToken;
    //   Actions.Home();
    // }
  }

  _goToHome() {
    this.props.login("token");
    Actions.Home();
  }

  render() {

    return (
      <Image style={styles.mainContainer} resizeMode='cover' source={require('../../Images/Login/background.png')}>
        <View style={styles.wrapper}>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginTop: 60}}>
            <Image style={{width:90, height:127}} source={require('../../Images/Login/logo.png')}/>
          </View>
          <View style={[styles.inputWrap, styles.inputMarginTop]}>
            <View style={styles.iconWrap}>
              <Image source={userIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#FFF"
              style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput
              placeholderTextColor="#FFF"
              placeholder="Password"
              style={styles.input}
              secureTextEntry />
          </View>
          <TouchableOpacity activeOpacity={.5} onPress={this._goToHome.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Image>
  );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  inputMarginTop: {
    marginTop: 70
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  button: {
    backgroundColor: "#115E80",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: width*0.95,
    borderRadius: 3
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  }
}

module.exports = connect(state => ({
  user:state.user
}), dispatch => ({
  login: bindActionCreators(login, dispatch)
}))(Login);
