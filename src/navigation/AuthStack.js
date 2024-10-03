import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = ({ setIsAuthenticated }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login">
      {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
    </AuthStack.Screen>
    <AuthStack.Screen name="Signup">
      {(props) => <SignupScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
    </AuthStack.Screen>
  </AuthStack.Navigator>
);

export default AuthStackScreen;
