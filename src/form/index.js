import React from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native'
import { Field, reduxForm,SubmissionError} from 'redux-form';







const customInput = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.field} onChangeText={onChange}{...restInput}/>
}
const customInputPassword = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.field} onChangeText={onChange} secureTextEntry={true}{...restInput}/>
}

const minLength = min => value =>
    value&&value.length<min? `Must be ${min} characters ot more`: undefined;

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    // //Valid submit
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    // function _submit(values) {
    //     return sleep(1000).then(() => {
    //         // simulate server latency
    //         if (!['nino'].includes(values.username)) {
    //             throw new SubmissionError({
    //                 username: 'User does not exist',
    //                 _error: 'Login failed!'
    //             })
    //         } else if (values.password !== '123') {
    //             throw new SubmissionError({
    //                 password: 'Wrong password',
    //                 _error: 'Login failed!'
    //             })
    //         } else {
    //             window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //         }
    //     })
    // }

    return (
        <View style={styles.view}>
            {/*<Text style={styles.title}>Form</Text>*/}

            <View style={styles.container}>

                <Text style={styles.text}>Username: </Text>
                <Field
                    style={styles.field}
                    name="username"
                    component={customInput}
                    secureTextEntry={false}
                    validate={[minLength(8)]}
                ></Field>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Password: </Text>
                <Field
                    style={styles.field}
                    name="password"
                    component={customInputPassword}
                ></Field>
            </View>
            {/*<View style={styles.buttonView}>*/}
                {/*<Button title='Cancel' onPress={()=>{}}/>*/}
                {/*<Button title='Submit' onPress={()=>props.navigation.navigate("User")}/>*/}
            {/*</View>*/}



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

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm);
