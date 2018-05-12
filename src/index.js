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
import { showIndicator, hideIndicator } from './actions';

import SimpleForm from './form';

type Props = {};
class App extends Component<Props> {

  fakeOperation = () => {
    this.props.showIndicator();
    setTimeout(() => {
      this.props.hideIndicator();
    }, 5000);
  }

  componentDidMount(){
    this.fakeOperation();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>H
      </View>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showIndicator: bindActionCreators(showIndicator, dispatch),
    hideIndicator: bindActionCreators(hideIndicator, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)