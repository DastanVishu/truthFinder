import React, {useEffect, useState, useContext} from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity, Platform, AndroidOpenSettings, Linking } from 'react-native';
import Background from './components/Background';
import {dark} from "../../assets/ContantsColor";
import Field from './components/Field';
import Btn from './components/btn';
import TouchID from 'react-native-touch-id';
import { AuthContext } from '../../context/AuthContext';
const SignIn = (props) => {
  const islogin = useContext(AuthContext)
  const [biometryType, setBiometryType] = useState({
    unifiedErrors: false,
    passcodeFallback: false
  })

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const data = {...signinData}
    data[e.name] = e.value;
    setSigninData(data);
  }

  const onSubmit = async () => {
    const {
      email,
      password
    } = signinData
    if(password && email){
        try {
          // console.log(islogin)
          islogin.login(signinData)
        } catch (e) {
          // saving error
          alert(e);
          console.log(e)
        }
      } else {
        alert("all Fields are required")
      }

  }

  useEffect(()=>{

    const isFingerPrintSupported = new Promise((resolve, reject) => {
      TouchID.isSupported(biometryType)
      .then((biometry) => {
          if(biometry && biometry !== "FaceID"){
            resolve(true)
          } else {
            let fingerprintLableForOS = Platform.OS == "ios" ? "Touch ID":"Fingerprint";
            reject( fingerprintLableForOS + " is not available on this device");
          }
      })
      .catch(error => {
          let errorCode = Platform.OS == "ios" ? error.name : error.code;
          if (errorCode === "LAErrorTouchIDNotEnrolled" || errorCode === "NOT_AVAILABLE" || errorCode === "NOT_ENROLLED") {
        let fingerprintLableForOS = Platform.OS == "ios" ? "Touch ID" : "Fingerprint";
              resolve(fingerprintLableForOS + " has no enrolled fingers. Please go to settings and enable " + fingerprintLableForOS + " on this device.");
          } else {
              reject(Platform.OS == "ios" ? error.message : translations.t(error.code));
          }
      });
    })

    isFingerPrintSupported.then(result => {
      if (result === true) {
        //fingerprint is supported and enrolled
        //TODO: we’ll work here in the next step
      } else {
        //show alert "TouchID has no enrolled fingers. Please go to settings and enable fingerprint on this device." that we returned from the service
        Alert.alert(
          "Alert",
          result,
          [{
            text: 'Ok', onPress: () => {
              //redirect to settings
              Platform.OS === "ios"
                ? Linking.openURL('app-settings:')
                : AndroidOpenSettings.securitySettings() // Open security settings menu
            }
          }]
        );
      }
    },
    error => { 
      console.log(error);
   })
  },[])

    return (
      <Background>
        <View style={sty.body}>
          <Text style={sty.title}>Truth Finder</Text>
          <Text style={sty.title2}>Let's Find Together</Text>
          <Text style={sty.title3}>Login to your account</Text>
          <Field placeholder="Email / Username" value={signinData.email} keyboardType={"email-address"} onChangeText={(e) => handleData({value: e, name:"email"})} />
          <Field placeholder="Password" value={signinData.password} secureTextEntry={true} onChangeText={(e) => handleData({value: e, name:"password"})} />
          
          <View style={sty.fpView}>
            <Text style={sty.textStyle} >Forgot Password ?</Text>
          </View>

          <Btn textColor={dark.white} bgColor={dark.sky} btnLabel="Login" Press={()=> onSubmit()} />
        </View>

        <View style={sty.dha}>
            <Text style={sty.textStyle}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text style={sty.textStyle2}>Signup</Text>
            </TouchableOpacity>
        </View>

        </Background>
      );
}


const sty = StyleSheet.create({
  body: {
    alignItems: "center",
    width: 430,
    marginTop: 85
  },
  title: {
    color: dark.sky,
    fontSize: 64,
    fontWeight: "bold",
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  title2: {
    color: dark.white, 
    fontSize: 14,
  },
  title3: { 
    color: dark.white, 
    fontSize: 19, 
    fontWeight: 'bold', 
    marginBottom: 20
  },
  fpView: {
    alignItems: 'flex-end', 
    width: "78%", 
    paddingRight: 16, 
    marginBottom: 180
  },
  textStyle: {
    color: dark.white, 
    fontWeight:"bold", 
    fontSize: 16
  },
  textStyle2: {
    color: dark.sky, 
    fontWeight:"bold", 
    fontSize: 16
  },
  dha: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent:"center"
  }
})

export default SignIn