import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../styles/globalStyles';

const ProfileScreen = () => {
  const { currentTheme } = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {/* You can add more profile-related content here */}
    </View>
  );
};

export default ProfileScreen;
