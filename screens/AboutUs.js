import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Text>AboutUs</Text>
            <Button
            title="Click"
            onPress={() => alert("Button Clicked")}/>

        </View>
    )
}

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    }
})