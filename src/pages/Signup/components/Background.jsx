import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView} from 'react-native';

const Background = ({children}) => {
return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <ImageBackground 
                source={require("../../../assets/detactive.jpg")}
                resizeMode='cover'
                style={styles.image}
            >
                <SafeAreaView>
                    <ScrollView>
                        {children}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})


export default Background;