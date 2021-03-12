import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"

import { createDrawerNavigator } from '@react-navigation/drawer';
// import AccountScreen from './screens/AccountScreen';
import AccountTabScreen from "./screens/AccountTabScreen"
import OrderScreen from "./screens/OrderScreen"
import * as Icon from "@expo/vector-icons"
import MainTabScreen from "./screens/MainTabScreen"
import AppStack from "./components/AppStack"
import AuthStack from "./components/AuthStack"
{/* <NavigationContainer >
      <AppStack/>
    </NavigationContainer> */}

export default function App() {

  return (
    <>
    <AuthStack/>
    
    </>
  );
}

const styles = StyleSheet.create({
  
});
