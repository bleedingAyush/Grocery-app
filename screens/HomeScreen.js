import React from "react"
import {useFonts} from "expo-font"
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import {TextInput, ScrollView, FlatList} from "react-native-gesture-handler"
import Products from "../src/Products"
import NewArrivals from "../src/NewArrivals"
import Best from "../src/Best"

const HomeScreen = ({navigation}) => {
    const [loaded] = useFonts({
        Bold: require('../assets/Fonts/Montserrat-ExtraBold.otf'),
        Medium: require('../assets/Fonts/Montserrat-Medium.otf'),
        Regular: require('../assets/Fonts/Montserrat-Regular.otf')
      });


    if (!loaded){
        return null;
    }
    return (

        <>
        <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}
            style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20
            }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 30,
                        alignItems: "center"
                    }}>
                        <View style={{
                        width: "50%"
                        }}>
                        <Text style={{
                            fontFamily: "Bold",
                            fontSize: 22,
                            // left: 90
                            // alignSelf: "center"
                            // alignItems: "center"
                        }}>Groceries</Text>
                        </View>
                        
                    </View>
                    
                    {/* <View style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 30
                    }}>
                    <Text style={{
                        fontFamily: "Bold"
            
                    }}>
                        Rasons
                    </Text>

                    </View> */}
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                    <Products
                    src={require('../assets/oreo.jpg')}
                    item="Biscuit"
                    name="Oreo"
                    price="₹ 51"
                    onPress={() => navigation.navigate("Good_Day")}
                    />
                    <Products
                    src={require("../assets/tiger.png")}
                    name="Good Quality Rason"
                    price="₹ 20"
                    item="Biscuit"
                    onPress={() => this.props.navigation.navigate("Detail")}
                    />
                    <Products
                    src={require("../assets/kama.jpg")}
                    name="Tana Tan"
                    price="₹ 95"
                    item="Snack"
                    onPress={() => this.props.navigation.navigate("Detail")}
                    />
            
                    </ScrollView>

                <View style={{
                flexDirection: "row",
                marginTop: 30,
                marginBottom: 10,
                alignItems: "center"
                }}>
                <Text style={{
                    fontFamily: "Bold",
                    color: "#4f4a4a",
                    fontSize: 20
                }}>
                    New Arrivals
                </Text>
                {/* <View style={styles.dot}>
                </View> */}
                {/* <Text style={{
                    fontFamily: "Bold",
                    fontSize: 10,
                    color: "#4f4a4a"
                }}>
                Good Quality Items

                </Text> */}

                </View>
                <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                        <NewArrivals src={require("../assets/good_day.jpg")}
                        price="₹ 10" item="Good day"/>
                        <NewArrivals src={require("../assets/tiger.png")}
                        price="₹ 10"
                        item="Tiger"
                        />
                        <NewArrivals src={require("../assets/kama.jpg")}
                        item="Kamasutra condom"
                        price="₹ 30"/>
                </ScrollView>

                <View style={{
                flexDirection: "row",
                marginTop: 30,
                marginBottom: 10,
                alignItems: "center"
                }}>
                <Text style={{
                    fontFamily: "Bold",
                    color: "#4f4a4a",
                    fontSize: 20
                }}>
                    Family packs
                </Text>
                {/* <View style={styles.dot}>
                </View>
                <Text style={{
                    fontFamily: "Bold",
                    fontSize: 10,
                    color: "#4f4a4a"
                }}>
                Discount on every items

                </Text> */}
                </View>
                <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                    <Best src={require('../assets/durex.jpg')} item="Durex"/>
                    <Best src={require('../assets/lays_barb.jpg')} item="Lays"/>
                    <Best src={require('../assets/viagra.jpg')} item="Viagra"/>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
        </View>
        </>
            
          );
        }
      
export default HomeScreen;

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    text: {
      color: "#161924",
      fontSize: 20,
      fontWeight: "500",
    },
    dot: {
        width:5,
        height:5, 
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "#4f4a4a"
    }
    
  })
  
  
            {/* <View style={{flexDirection: "row",
                    alignItems:"center",
                    width: "100%",
                    marginVertical: 30}}>
                    <View style={{
                    flexDirection: "row",
                    alignItems:"center",
                    elevation: 2,
                    width: "98%",
                    backgroundColor: "#fff",
                    paddingHorizontal: 20,
                    height: 35, 
                    borderRadius: 20,
                    marginHorizontal: 1
                    }}>
                    <TextInput 
                    placeholder="Search fresh groceries     "
                    style={{
                    fontFamily: "Medium",
                    paddingHorizontal: 10,
                    fontSize: 12
                    }}/>
    
                    </View>
                    
                    </View>
             */}