import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
    return(
        <TouchableOpacity 
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderRadius: 100, 
            alignItems: 'center',
            width: 250,
            paddingVertical: 4,
            marginVertical: 5
        }}>
            <Text style={{color: textColor, fontSize: 20, fontWeight: "bold"}}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default Btn;