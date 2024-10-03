import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ColorPicker from '../components/ColorPicker';
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../styles/globalStyles';

const SignupScreen = ({ setIsAuthenticated }) => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Simulate successful signup
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  return (
    <View style={styles.container}>
      <ColorPicker />
      <Text style={styles.title}>Sign Up</Text>
      <FormInput
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />
      <FormInput
        label="Password"
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <FormButton title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
