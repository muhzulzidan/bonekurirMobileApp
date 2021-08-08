import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreens } from './HomeScreens';
import ProfileScreen from './ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



type RootStackParamList = {
    Home: undefined;
    ProfileScreen: undefined;

    options: any;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};


const RootStack = createBottomTabNavigator<RootStackParamList>();




export default function App() {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={HomeScreens} />
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}