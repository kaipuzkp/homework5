import React from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native'
import { Field, reduxForm,SubmissionError} from 'redux-form';

import NavigateButton from '../NavigateButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAlert } from '../actions';
// const { navigation } = this.props;



const customInput = ({input: {onChange, ...restInput}, ...restProps}) => {
    return <TextInput style={styles.field} onChangeText={onChange} {...restInput} {...restProps} />
}
const customInputPassword = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.field} onChangeText={onChange} secureTextEntry={true}{...restInput}/>
}

const minLength = min => value =>
    value&&value.length<min? `Must be ${min} characters ot more`: undefined;

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;



    return (
        <View style={styles.view}>
            {/*<Text style={styles.title}>Form</Text>*/}

            <View style={styles.container}>

                <Text style={styles.text}>Username: </Text>
                <Field
                    style={styles.field}
                    name="username"
                    component={customInput}
                    // secureTextEntry={false}
                    validate={[minLength(8)]}
                ></Field>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Password: </Text>
                <Field
                    style={styles.field}
                    name="password"
                    component={customInput}
                    secureTextEntry={true}
                ></Field>
            </View>
            <View style={styles.buttonView}>
                <Button title='Cancel' onPress={()=>{}}/>
                <NavigateButton 
                    title='Submit'
                    target="UserScreen" 
                    action={()=>{
                        props.showAlert({
                            type: 'warn',
                            title: 'Waning Title',
                            body: 'Redux Warning message'
                            })
                    }}
                />
            </View>



        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        //   width:200,
    },
    field: {
        width:200,
        backgroundColor: '#FFFFFF',
        marginTop:20,
        borderWidth: 0.5,
        borderColor: '#000000',
    },
    view:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    title:{
        alignSelf: 'flex-start'
    },
    buttonView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight:35,
        width:200,
    },
    text:{
        marginTop:20,
    }

});
const mapDispatchToProps = (dispatch) => {
    return {
      showAlert: bindActionCreators(showAlert, dispatch)
    }
}
  
export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm))
