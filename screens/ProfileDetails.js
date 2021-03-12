import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"

const ProfileDetails = () => {
    return (
        <View style={styles.container}>
            <Text>ProfileDetails</Text>
            <Button
            title="Click"
            onPress={() => alert("Button")}/>

        </View>
    )
}

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    }
})