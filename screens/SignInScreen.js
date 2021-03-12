import React from "react"
import {View, Text, Button,StatusBar, TextInput,Alert, StyleSheet, Platform, TouchableOpacity, Dimensions} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import * as Icons from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"

import {AuthContext} from "../compo/context"
import Users from "../model/users"

const SignInScreen = ({navigation}) => {
    
    const [data, setData] = React.useState({
        username: '', 
        password: '',
        check_textInputChange: false,
        secureTextEntry: true, 
        isValidUser: true,
        isValidPassword: true,
    });

    const {signIn} = React.useContext(AuthContext);
    const textInputChange = (val) => {
        if(val.trim().length >= 4 ){
            setData({
                ...data, 
                username: val,
                check_textInputChange: true,
                isValidUser: true

            });
        }else{
                setData({
                    ...data, 
                    username: val,
                    check_textInputChange: false,
                    isValidUser: false
    
                });
            }
        }
        const handleValidUser = (val) => {
            if( val.trim().length >= 4 ) {
                setData({
                    ...data,
                    isValidUser: true
                });
            } else {
                setData({
                    ...data,
                    isValidUser: false
                });
            }
        }
        const updateSecureTextEntry = () => {
           setData({
            ...data, 
            secureTextEntry: !data.secureTextEntry
        }) 
    }

    const loginHandle = (username, password) => {
        const foundUser = Users.filter( item => {
            return username == item.username && password == item.password
        });

        if (foundUser.length == 0){
            Alert.alert("Invalid User", "Username or password is incorrect", [{text: "Okey"}]);
            return;
        }
        if (data.length == 0 || data.password.length == 0){
            Alert.alert("Wrong Input", "Username or password field cannot be empty", [{text: "Okay"}]);
            return;
        }
        signIn(foundUser);

    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        
        }

    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#262626" barStyle="Light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <View style={styles.footer}> 
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <Icons.FontAwesome name="user-o" color="black" size={20}/>
                    <TextInput
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing = {(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                    animation="bounceIn">
                        <Icons.Feather name="check-circle"
                        color="green"
                        size={16}/>
                    </Animatable.View>
                        : null}
                
                </View>
                {data.isValidUser ? null: 
                <Animatable.View 
                animation="fadeInLeft" duration={500}
                >
                    <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
                </Animatable.View>
                }
                
                    <Text style={styles.text_footer}>Password</Text>
                    <View style={styles.action}>
                        <Icons.Feather name="lock" color="black" size={20}/>

                        <TextInput
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry ? true: false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}/>

                        <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                            <Icons.Feather name="eye-off"
                            color="black"
                            size={16}/>
                        :
                        <Icons.Feather name="eye" 
                        color="black"
                        size={16}/>}
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
                    </Animatable.View>
                    }
                    <View style={styles.button}>
                    <TouchableOpacity
                    onPress={() => { loginHandle( data.username, data.password )}}
                    style={[styles.signIn, {
                        borderColor: "#009387",
                        borderWidth: 1,
                        marginTop: 15
                        
                    }]}
                    >
                        <LinearGradient
                        colors= {['#262626', '#333333']}
                        style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: "#fff"
                                
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                    style={[styles.signIn, {
                        borderColor: "#262626",
                        borderWidth: 1,
                        marginTop: 15
                        
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: "#262626"
                        }]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </View>
        
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#262626'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });