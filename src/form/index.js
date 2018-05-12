import React from 'react';
import { Text, TextInput,View } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const customInput = ({ input: { onChange, ...restInput }}) => {
  return (<View>
    <TextInput onChangeText={onChange} {...restInput} />
  </View>);
}

const required = value => (value ? undefined : 'Required');
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const SimpleForm = props => {
  const { input, meta, ...inputProps } = props;
  return (
    <View>
      <Text>Testing Form</Text>
      <Field
        name="username"
        component={customInput}
        validate={[required, minLength(8)]}
      />
    </View>
  );
};

export default reduxForm({
  form: 'simple', 
})(SimpleForm);
