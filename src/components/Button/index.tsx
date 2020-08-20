import React from "react"
import { RectButton } from "react-native-gesture-handler"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"

interface button {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    onPress?(): any
}

const Button: React.FC <button> = props => {
    return (
        <View style={[styles.buttonContainer, props.containerStyle]}>
            <RectButton 
                onPress={props.onPress && props.onPress} 
                style={[styles.button, props.style]}
            >
                {props.children}
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#00ccaa",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        shadowColor: "#000",
        shadowOpacity: 0.4,
        elevation: 4,
    },
    buttonContainer: {
        position: "relative",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Button