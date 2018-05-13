import React, { Component } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { hideAlert } from './actions';

class AppAlert extends Component {
  onClose = () => {
    this.props.hideAlert();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.showAlert) {
      const {type, title, body} = nextProps.alertMessage;
      this.dropdown.alertWithType(type || 'info' , title, body);
    }
  }

  render() {
    return <DropdownAlert ref={ref => this.dropdown = ref} onClose={data => this.onClose(data)} />;
  }
}
const mapStateToProps = state => {
  return {
    showAlert: state.settings.showAlert,
    alertMessage: state.settings.alertMessage
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    hideAlert: bindActionCreators(hideAlert, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AppAlert)