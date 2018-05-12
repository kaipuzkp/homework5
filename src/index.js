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
  Button
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter, decreaseCounter } from './actions';

type Props = {};
class App extends Component<Props> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
    return (
      <View style={styles.container}>
        <Button title="+" onPress={increaseCounter} />
        <Text style={styles.instructions}>
          {counter}
        </Text>
        <Button title="-" onPress={decreaseCounter} />
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
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
    decreaseCounter: bindActionCreators(decreaseCounter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)