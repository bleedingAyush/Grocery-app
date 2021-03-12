import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"

import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from "../screens/OrderScreen"
import * as Icon from "@expo/vector-icons"
import MainTabScreen from "../screens/MainTabScreen"
import SignOut from "../screens/SignOut"
import AccountTabScreen from "../screens/AccountTabScreen"

const Drawer = createDrawerNavigator();
const OrderStack = createStackNavigator();
// const AccountStack = createStackNavigator();


const OrderStackScreen = ({navigation}) => {
    return (
    <OrderStack.Navigator>
          <OrderStack.Screen name="Orders" component={OrderScreen} options={{
            headerLeft: () => (
              <Icon.Entypo.Button name="menu" size={24} backgroundColor="#fff" color="black" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
            )
          }} />
    </OrderStack.Navigator> 
    )
  }

// const AccountStackScreen = ({navigation}) => {
//     return (
//     <AccountStack.Navigator>
//           <AccountStack.Screen name="Account" component={AccountScreen} options={{
//             headerLeft: () => (
//               <Icon.Entypo.Button name="menu" size={24} backgroundColor="#fff" color="black" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
//             )
//           }} />
//     </AccountStack.Navigator> 
//     )
//   }



export default function AppStack() {
  return (
    <>
    {/* <NavigationContainer > */}
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={MainTabScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Icon.Entypo name="home" size={20} color={tintColor} />
          )
          
        }}/>
        <Drawer.Screen name="Orders" component={OrderStackScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Icon.Feather name="shopping-cart" size={20} color={tintColor} />
          )
          
        }}/>
        <Drawer.Screen name="Settings" component={AccountTabScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Icon.Ionicons name="settings" size={20} color={tintColor} />
          )
          
        }}/>
        </Drawer.Navigator>
    {/* </NavigationContainer> */}
    </>
  );
}
