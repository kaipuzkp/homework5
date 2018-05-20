/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showIndicator, hideIndicator, showAlert } from './actions';

import {
  createStackNavigator,
} from 'react-navigation';

import Login from '../src/login/login';
import User from '../src/user/user';
// import Signup from './src/signup/signup';

const AppNavigator = createStackNavigator({
    LoginScreen: Login,
    UserScreen:  User,
    // SignupScreen: {screen: Signup},
},
{
  initialRouteName: 'LoginScreen',
});




import SimpleForm from './form';

// type Props = {};
// class App extends Component<Props> {
class App extends Component{  

  fakeOperation = () => {
    this.props.showIndicator();
    setTimeout(() => {
      this.props.hideIndicator();
    }, 5000);
  }

  componentDidMount(){
    this.fakeOperation();
  }
    // static navigationOptions = {
    //     title: 'Login',
    // };

  render() {

    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    buttonView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight:35,
        width:200,
    },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showIndicator: bindActionCreators(showIndicator, dispatch),
    hideIndicator: bindActionCreators(hideIndicator, dispatch),
    showAlert: bindActionCreators(showAlert, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)