import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated’, ‘Module RCTImageLoader']);

export class User extends Component {
    static navigationOptions = {
        title: 'User',
    };
    render() {
        // const { navigation } = this.props;
        // const titlename = navigation.getParam('title', 'Title');
        return (
            <View>
                <Text>Welcome</Text>
            </View>
        )
    }
};

export default User;