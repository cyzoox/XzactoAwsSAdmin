import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from '../utils/styles';


const FormInput = ({ label, value, placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormInput;
