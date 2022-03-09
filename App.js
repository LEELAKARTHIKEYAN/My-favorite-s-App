import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStackNav from './navigation/RootStackNav';
import RootDrawerNav from './navigation/RootDrawerNav';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FEF5ED"/>
      <RootDrawerNav/>
      {/* <RootStackNav/> */}
    </NavigationContainer>
  );
}
;
