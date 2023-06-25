import React from "react";
import { TextInput } from "react-native";
import { dark } from "../../../assets/ContantsColor";
const Field = (props) => {

    return(
        <TextInput 
            {...props}
            style={{
                borderRadius: 100, 
                color: dark.white,
                paddingHorizontal:20, 
                width: "78%", 
                marginVertical: 10,
                borderColor: dark.white,
                borderWidth: 1,
                backgroundColor: "rgba(183 183 183 / 0.4)"
            }}
            placeholderTextColor={dark.white}
        />
    )

}

export default Field;