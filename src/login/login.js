import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated’, ‘Module RCTImageLoader']);

import SimpleForm from '../form';

export class Login extends Component {
    
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        // const { navigation } = this.props;
        // const titlename = navigation.getParam('title', 'Title');
        return (
            <View style={styles.container}>

                <SimpleForm />
            </View>
        );
    }
};
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

export default Login;