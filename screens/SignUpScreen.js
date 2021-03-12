import React from "react"
import {View, Text, Button,StatusBar, TextInput, StyleSheet, Platform, TouchableOpacity, Dimensions} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import * as Icons from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"


const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: "", 
        password: "",
        confirm_password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });
    const textInputChange = (val) => {
        if(val.length !== 0 ){
            setData({
                ...data, 
                username: val,
                check_textInputChange: true

            });
        }
            else{
                setData({
                    ...data, 
                    username: val,
                    check_textInputChange: false
    
                });
            }
        }
        const handlePasswordChange = (val) => {
            setData({
                ...data, 
                password: val
            })
        }

        const handleConfirmPasswordChange = () => {
            setData({
                ...data,
                confirm_password: val
            })
        }
        const updateSecureTextEntry = () => {
           setData({ 
            ...data, 
            secureTextEntry: !data.secureTextEntry
        }) 
    }

    const updateConfirmSecureTextEntry = () => {
        setData({ 
        ...data, 
         confirm_secureTextEntry: !data.confirm_secureTextEntry
     }) 
 }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#262626" barStyle="Light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <Icons.FontAwesome name="user-o" color="#05375a" size={20}/>
                    <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
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
                
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Icons.Feather name="lock" color="#05375a" size={20}/>

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
                    
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Icons.Feather name="lock" color="#05375a" size={20}/>

                        <TextInput
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry ? true: false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}/>

                        <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}>
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
                
                <View style={styles.button}>
                    <LinearGradient
                    colors={['#262626', '#333333']}
                    style={styles.signIn}>
                        <Text style={[styles.textSign, {
                            color: "#fff"
                            
                        }]}>Sign Up</Text>
                    </LinearGradient>
                    
                    <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
                    style={[styles.signIn, {
                        borderColor: "#262626",
                        borderWidth: 1,
                        marginTop: 15
                        
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: "#262626"
                        }]}>Sign In</Text>
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