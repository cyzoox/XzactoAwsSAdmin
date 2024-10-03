import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../styles/globalStyles';

const MainScreen = ({ navigation }) => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  const handleLogout = () => {
    // Navigate back to the login screen (or set isAuthenticated to false)
    // Assuming you will implement navigation to go back
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Main Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default MainScreen;
