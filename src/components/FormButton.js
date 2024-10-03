import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../utils/styles';


const FormButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
