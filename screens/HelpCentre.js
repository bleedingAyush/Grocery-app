import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"

const HelpCentre = () => {
    return (
        <View style={styles.container}>
            <Text>HelpCentre</Text>
            <Button
            title="Click"
            onPress={() => alert("Button Clicked")}/>

        </View>
    )
}

export default HelpCentre;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    }
})