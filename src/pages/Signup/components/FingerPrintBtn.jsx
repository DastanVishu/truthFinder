import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const FPBtn = ({bgColor, Press}) => {
    return(
        <TouchableOpacity 
        onPress={Press}
        style={{
            backgroundColor: "rgba(131 26 38 / 0.6)",
            borderRadius: 100, 
            alignItems: 'center',
            width: 90,
            paddingVertical: 4,
            marginVertical: 5,
            textShadowColor: 'rgba(131 26 38 / 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 100
        }}>
            <Image
                source={require("../../../assets/fingerprint.png")}
                style={{
                    height: 100,
                    width: 80
                }}
            />
        </TouchableOpacity>
    )
}

export default FPBtn;