import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"
import * as Icon from "@expo/vector-icons"
import {AuthContext} from "../compo/context"

const SignOut = () => {

    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.bottomDrawerSection}>
                <Icon.MaterialCommunityIcons name="exit-to-app"
                    color="green"
                    size={16}
                    onPress={() => {signOut()}}/>
                

        </View>
    )
}

export default SignOut;

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})