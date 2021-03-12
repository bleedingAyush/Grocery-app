import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import * as Icon from "@expo/vector-icons"
import HomeScreen from "./HomeScreen"
import CartScreen from "./CartScreen"
import Good_day from "../ProductsScreen/Good_day"

const Stack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Cart I" component={HomeStackScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Good_Day" component={GoodStackScreen} options={{
          headerShown: false,
        }}/>
    </Stack.Navigator>
  )
}

export default MainTabScreen;

const HomeStack = createStackNavigator();
const GoodStack = createStackNavigator();

const GoodStackScreen = ({navigation}) => {
  return (
    <GoodStack.Navigator>
      <GoodStack.Screen name="Good day" component={Good_day} options={{
        headerRight: () => (
          <Icon.Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="#fff" onPress={() => navigation.navigate("Cart")}></Icon.Entypo.Button>

        ),
      }}/>
        
    </GoodStack.Navigator>
  )
}

const HomeStackScreen = ({navigation}) => {
        return (
            <HomeStack.Navigator>
              <HomeStack.Screen  name="Home"component={HomeScreen} options={{
                headerLeft: () => (
                  <Icon.Entypo.Button name="menu" size={24} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
                ),
                
                headerRight: () => (
                  <Icon.Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="#fff" onPress={() => navigation.navigate("Cart")}></Icon.Entypo.Button>
                )
              }} />
            </HomeStack.Navigator> 
        )
      }
