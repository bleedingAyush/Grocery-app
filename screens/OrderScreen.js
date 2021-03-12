import React from "react"
import {View, Text, Button, StyleSheet, ImageBackground, Image} from "react-native"
import * as Icons from "@expo/vector-icons"
import {LinearGradient} from "expo-linear-gradient"


const OrderScreen = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/black_logo.png')} style={{ 
               marginTop: -280,
               height: 180,
               width: 180,
                // backgroundColor: "#4f4a4a"
            }}>
            {/* <Image style={{height: 180, width: 180}} source={require('../assets/f4_cart.png')}/> */}
                <Text style={{marginTop: 180, textAlign: "center", fontFamily: "Medium"}}>
                        Seems to be you haven't order anything yet
                </Text>
                
            </ImageBackground>
            
            <View style={{marginTop: 100, width: 170, borderRadius: 400}}>
                {/* <LinearGradient colors={['#65f2e7', '#7ef0e7']}> */}
                    <Button color = '#262626'
                    // '#262626'
                    // '#04eaa2' 
                     title="Start Shopping" style={{marginTop: 100}} onPress={() => navigation.navigate("Home")}/>
                {/* </LinearGradient> */}
            </View>
            
        
        </View>
        </>
    )
}

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 45,
    }
})
