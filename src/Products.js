import React from "react";
import {Text, View, Image} from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"

export default class Products extends React.Component{
    render(){
        return (
            <TouchableOpacity
            onPress={this.props.onPress}
            style={{
                marginTop: 30,
                backgroundColor: "#fff",
                height: 250,
                width: 200,
                elevation: 2,
                borderRadius: 10,
                padding: 15,
                marginRight: 30,
                marginLeft: 2,
                marginBottom: 5
            }}>
                <Image 
                source={this.props.src}
                style={{
                    width: 170, 
                    height: 110,
                    borderRadius: 10
                }}
                resizeMode = "cover"/>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10
                }}>
                    <Text style={{
                        fontFamily: "Bold",
                        color: "#4f4a4a"

                    }}>
                        {this.props.name}
                    </Text>
                </View>
                <Text style={{
                        fontSize: 9,
                        // color: "#f4a4a",
                        fontFamily: "Regular"
                    }}>
                        {this.props.item}

                    </Text>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 5, 
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <View style={{
                            width: "80%"
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: "Bold"
                            }}>{this.props.price}</Text>
                        </View>
                        <View>
                            {/* <TouchableOpacity>
                                <Icons.Ionicons name="ios-add-circle-sharp" size={34} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
             </TouchableOpacity>
        );
    }
}