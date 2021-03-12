import React from "react"
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native"
import {AuthContext} from "../compo/context"
import * as Icon from "@expo/vector-icons"
import {LinearGradient} from "expo-linear-gradient"
// import * as Animatable from "react-native-animatable"

const AccountScreen = ({navigation}) => {
    const {signOut} = React.useContext(AuthContext);
    
    return (
        <>
        <View style={styles.container}>
            <View style={styles.box}>

                    <TouchableOpacity style={[styles.center_linear, {
                        marginTop: 70
                    }]} onPress={() => navigation.navigate("Orders")}>
                        <LinearGradient style={styles.order_grad} colors = {['#262626', '#333333']} 
                        // {['#04eaa2', '#04eaa2']}
                        // 
                        // {['#ffcccc', '#ffe6e6']}
                        >
                            {/* <View style={styles.orders} > */}
                                <Icon.FontAwesome5  style={{
                                    left: 10,
                                }}name="parachute-box" color="#fff" size={30}/>
                                <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", marginTop: 8}}>   | Orders</Text>  
                            {/* </View> */}
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.center_linear, {
                        marginTop: 30
                    }]} onPress={() => navigation.navigate("Profile Details")}>
                        <LinearGradient style={styles.order_grad} colors = {['#262626', '#333333']}
                        >
                            {/* <View style={styles.orders} > */}
                                <Icon.MaterialCommunityIcons  style={{
                                    left: 10,
                                }}name="account" color="#fff" size={30}/>
                                <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", marginTop: 8}}>   | Profile Details</Text>  
                            {/* </View> */}
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.center_linear, {
                        marginTop: 30
                    }]} onPress={() => navigation.navigate("Help Centre")}>
                        <LinearGradient style={styles.order_grad} colors = {['#262626', '#333333']}
                        >
                            {/* <View style={styles.orders} > */}
                                <Icon.AntDesign  style={{
                                    left: 10,
                                }}name="customerservice" color="#fff" size={30}/>
                                <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", marginTop: 8}}>   | Help Centre</Text>  
                            {/* </View> */}
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* <View style={{ borderBottomColor: 'black',borderBottomWidth: 1,}}/> */}
                    <TouchableOpacity style={[styles.center_linear, {
                        marginTop: 30
                    }]} onPress={() => navigation.navigate("About us")}>
                        <LinearGradient style={styles.order_grad} colors = {['#262626', '#333333']}
                        >
                                <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", marginTop: 8}}>   About Us</Text>  
                            {/* </View> */}
                        </LinearGradient>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.signOut} onPress= {() => {signOut()}}>
                        <LinearGradient colors = {['#262626', '#333333']}
                           style={styles.signIn}>
                        {/* {['#f75d7c', '#f75d5c']} */}
                            <Text style={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}>Sign Out </Text>
                            <Icon.MaterialCommunityIcons name="exit-to-app"
                                color="white"
                                size={24}/>
                        </LinearGradient>
                    </TouchableOpacity>
             </View>
            
        </View>
         
        </>
        
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
   
    container: {
        flex: 1, 
    },
    signIn: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    order_grad: {
        width: 400,
        height: 60,
        // marginTop: 100,
        // alignContent: "flex-start",
        // justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        // borderRadius: 10
    },
    orders: {
        flexDirection: "row",
        marginTop: 120,
        // height: 30,
        // alignItems: "center",
        right: 70,
        justifyContent: "center",
        // paddingHorizontal: 10,
    },
    center_linear: {
        alignContent: "center",
        alignItems: "center"
    },
    signOut: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {

        marginTop: 30,
        backgroundColor: "#fff",
        height: 580,
        width: 400,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        // marginRight: 80,
        // marginLeft: 0,
        marginBottom: 5
    }
    // footer: {
    //     flex: 3,
    //     backgroundColor:  '#bfbfbf',
    //     borderTopLeftRadius: 160,
    //     borderEndColor: "#f2f2f2",
    //     borderBottomWidth: 20,
    //     borderEndWidth: 10,
    //     borderStartWidth: 10,
    //     // borderTopStartRadius: 20,
    //     borderStartColor: "#f2f2f2",
    //     borderTopRightRadius: 160,
    //     borderBottomEndRadius: 160,
    //     borderBottomStartRadius: 160,
    //     paddingHorizontal: 20,
    //     borderBottomColor: "#f2f2f2",
    //     paddingVertical: 20,
    //     borderTopWidth: 10,
    //     borderTopColor: "#f2f2f2"
    // },
})