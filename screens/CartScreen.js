import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
            <Button
            title="Click"
            onPress={() => alert("Button")}/>

        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    }
})