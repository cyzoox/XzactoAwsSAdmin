import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../styles/globalStyles';

const HomeScreen = ({ setIsAuthenticated }) => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set the authenticated state to false
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
