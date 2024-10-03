import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const AppStackScreen = ({ setIsAuthenticated }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline'; // Change to your desired icon name
        } else if (route.name === 'Profile') {
          iconName = 'person-outline'; // Change to your desired icon name
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e91e63', // Color for active tab
      tabBarInactiveTintColor: 'gray', // Color for inactive tabs
    })}
  >
    <Tab.Screen name="Home">
      {(props) => <HomeScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Tab.Screen>
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppStackScreen;
