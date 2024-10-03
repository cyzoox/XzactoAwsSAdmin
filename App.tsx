import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import the ThemeProvider
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
// A placeholder for your main app screen
import { createTheme } from './src/styles/themes'; // Import your themes
import { ThemeProvider } from './src/context/ThemeContext';
import MainScreen from './src/screens/MainScreen';
import AppStackScreen from './src/navigation/AppStack';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme

  return (
    <ThemeProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <AppStackScreen setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
              {(props) => <SignupScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
