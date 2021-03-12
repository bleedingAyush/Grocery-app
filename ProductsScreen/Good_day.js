import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image , StyleSheet} from "react-native";
import SwiperComponent from "../src/SwiperComponent"
import Stars from "react-native-stars"
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native";
import * as Icons from "@expo/vector-icons"


export default class Good_day extends React.Component {
  render() {
    return (
      <View style={styles.container}>

            <View style={{flexDirection: "row",
        height: 340,
        width: "100%"}}>
            <View style={{
                marginTop: 120
            }}>
                <View style={styles.square}></View>
                <View style={[styles.square, {
                    marginVertical: 10,
                    backgroundColor: "#707070"

                }]}></View>
                <View style={[styles.square, {
                    backgroundColor: "#b3b4b9"
                }]}></View>
                
            </View>
            <SwiperComponent/>
            

            </View>
                {/* <View style={{
                width: '100%',
                alignItems: "flex-end"
            }}>
                
                    <Image
                    source={require('../../assets/images/save.png')}
                    style={{
                        marginTop: 20,
                        width: 15,
                        height: 20
                    }}
                />
                
            </View> */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                // width: 15,
                marginTop: 10,
                width: "100%"
            }}>
                <View style={{
                    width: "65%"
                }}>
                    <Text style={{
                        fontFamily: "Bold",
                        fontSize: 18,
                        color: "#4f4a4a"
                    }}>Autobe best Chair</Text>
                </View>
                <View style={{
                    width: "35%"
                }}>
                    <Text style={{
                        fontFamily: "Medium",
                        fontSize: 9,
                        color: "#4f4a4a"
                    }}>Customer Rating</Text>
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <Stars
                        default={4}
                        count={5}
                        half={true}
                        starSize={20}
                        fullStar={<Icon name={"star"} style={styles.myStartStyle}/>}
                        emptyStar={<Icon name={"star-outline"} style={[styles.myStartStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={"star-half"} style={styles.myStartStyle}/>}
                        />

                    </View>
                    
                    <Text style={{
                            fontsize: 8,
                            fontFamily: "Bold",
                            marginHorizontal: 5,
                            paddingTop: 4,
                            color: "#b3aeae"
                        }}>
                            84 reviews
                        </Text>
                </View>
            </View>
            <Text style={{
                fontFamily: "Bold",
                fontSize: 16,
                color: "#b3aeae",
                marginTop: -18
            }}>₹ 20</Text>
            <Text style={{
                fontFamily: "Bold",
                fontSize: 14,
                lineHeight: 20,
                color: "#b3aeae",
                marginTop: 30
            }}>Buttery buscuits waiting to be yours under 30 minutes.</Text>
            <ScrollView style={{
                marginTop: 40}}
                horizontal
                showsHorizontalScrollIndicator={false}>
                    <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/oreo.jpg')}
                        style={{height: 80, width: 80}}
                        />
                    </View>
                    <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/tiger.png')}
                        style={{height: 80, width: 80}}
                        />
                    </View>
                    <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/parle-g-biscuit.png')}
                        style={{height: 80, width: 80}}
                        />
                    </View>
                    <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/tana_tan.png')}
                        style={{height: 80, width: 80}}
                        />
                    </View>
                    <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/kuch_kuch.png')}
                        style={{height: 80, width: 80}}
                        />
                    </View>
                    {/* <View style={styles.additonalChairs}>
                        <Image
                        source={require('../assets/')}
                        style={{height: 80, width: 80}}
                        />
                    </View> */}
            </ScrollView>
            <TouchableOpacity>
                <View style={{
                    backgroundColor: "#4f4a4a",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    padding: 12,
                    marginBottom: 15
                }}>
                    <Icons.Feather name="shopping-bag" color="#fff"
                    size={22}
                    />
                    <Text style={{fontSize: 20, color: "#fff", 
                fontFamily: "Bold",
                marginHorizontal:15 }}>  Add to Cart</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
      flex: 1, 
      paddingHorizontal: 20,
      backgroundColor: "#fff"
  },
  square:{ 
      backgroundColor: "#3f3a42",
      height: 25,
      width: 25,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#fff",
      elevation: 2

  },
  myStarStyle:{
    color:"#000",
    backgroundColor:'transparent',
    textShadowColor:"black",
    textShadowOffset:{width:1,height:1},
    textShadowRadius:2,

  },
  myEmptyStarStyle:{
    color:"white"
 },
 additonalChairs: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f6fb",
    height: 80,
    width: 80,
    borderRadius: 25,
    marginRight: 20

 }
})