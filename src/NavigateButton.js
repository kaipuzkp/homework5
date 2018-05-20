import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';


class NavigateButton extends Component{
    render(){
        return (
        <Button 
            onPress={()=>{
                this.props.navigation.navigate(this.props.target);
                this.props.action()
            }
            } 
        {...this.props} />
    );
    }
}


export default withNavigation(NavigateButton);