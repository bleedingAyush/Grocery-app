import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from "../screens/RootStackScreen"
import AppStack from "./AppStack"
// import Providers from "./components"
import {AuthContext} from "../compo/context"
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as SecureStore from 'expo-secure-store';
const Drawer = createDrawerNavigator();

export default function AuthStack() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);


  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,

  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState, 
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
          return {
            ...prevState, 
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGOUT':
          return {
            ...prevState, 
            userName: null,
            userToken: null,
            isLoading: false,
          };
        case 'REGISTER':
          return {
            ...prevState, 
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
    }
  };

  const [loginState  , dispatch] = React.useReducer(loginReducer, initialLoginState)
  
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      
      // setUserToken("fgkf");
      // setIsLoading(false);
      userName = foundUser[0].username;
      userToken = String(foundUser[0].userToken);
    //   await SecureStore.setItemAsync('userToken', userToken);
        
        try{
          await AsyncStorage.setItem('userToken', userToken)
        }catch(e){
          console.log(e);
  
        }

      
      dispatch({type: 'LOGIN' , id: userName, token: userToken});
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      // await SecureStore.deleteItemAsync('userToken')
      try{
        await AsyncStorage.removeItem('userToken')
        // await SecureStore.deleteItemAsync('userToken')
      }catch(e){
        console.log(e);

      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken("fgkf");
      // setIsLoading(false)
    },
    
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false)
      let userToken;
      userToken = null;
      // userToken = await SecureStore.getItemAsync('userToken');
        
      try{
        // userToken = await SecureStore.getItemAsync('userToken');
        userToken = await AsyncStorage.getItem('userToken');
      
      }catch(e){
        console.log(e);

      }
      dispatch({type: 'RETRIEVE_TOKEN' , token: userToken});

    }, 1000);
  }, [])

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }
  return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken !== null ? (
            <AppStack/>
          )
          :
          <RootStackScreen/>
          }
          </NavigationContainer>
      </AuthContext.Provider>
    
  );
}

