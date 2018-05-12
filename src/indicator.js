import React from 'react';
import { ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';


const AppIndicator = props => props.showIndicator && <ActivityIndicator {...props} />

const mapStateToProps = state => {
  return {
    showIndicator: state.settings.showIndicator
  }
}


export default connect(mapStateToProps)(AppIndicator)