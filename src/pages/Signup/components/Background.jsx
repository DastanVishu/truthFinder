import React from 'react';
import {View, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView} from 'react-native';

const Background = ({children}) => {
return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View>
        <ImageBackground 
            source={require("../../../assets/detactive.jpg")}
            style={{height: '100%'}}
        />
        <View style={{position: "absolute"}}>
            <SafeAreaView>
                <ScrollView>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </View>
    </View>
    </TouchableWithoutFeedback>
)
}


export default Background;