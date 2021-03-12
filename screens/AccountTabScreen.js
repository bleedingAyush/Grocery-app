import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import * as Icon from "@expo/vector-icons"
import AccountScreen from "./AccountScreen"
import ProfileDetails from "./ProfileDetails"
import HelpCentre from "./HelpCentre"
import AboutUs from "./AboutUs"

const Stack = createStackNavigator();

const AccountTabScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Account I" component={AccountStackScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Profile Details" component={ProfileDetails}/>
        <Stack.Screen name="Help Centre" component={HelpCentre}/>
        <Stack.Screen name="About us" component={AboutUs}/>
    </Stack.Navigator>
  )
}

export default AccountTabScreen;

const AccountStack = createStackNavigator();

const AccountStackScreen = ({navigation}) => {
        return (
        <AccountStack.Navigator>
              <AccountStack.Screen name="Settings" component={AccountScreen} options={{
                headerLeft: () => (
                  <Icon.Entypo.Button name="menu" size={24} backgroundColor="#fff" color="black" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
                )
              }} />
        </AccountStack.Navigator> 
        )
      }
    