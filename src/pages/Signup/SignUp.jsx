import React, {useEffect, useState, useContext} from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from './components/Background';
import {dark} from "../../assets/ContantsColor";
import Field from './components/Field';
import Btn from './components/btn';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
const SignUp = (props) => {
  const authState = useContext(AuthContext);
  const [signupData, setSignupData] = useState({
    firstname:"",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  });

  useEffect(()=>{
    authState.setisLoading(false)
  },[])

  const handleData = (e) => {
    const data = {...signupData}
    // console.log(e);
    // console.log(e.target.name);
    data[e.name] = e.value;
    setSignupData(data);
  }

  const onSubmit = async () => {
    const {
      firstname,
      lastname,
      email,
      password,
      cpassword
    } = signupData
    if(password === cpassword){
      if(firstname && lastname && email && password && cpassword){
        try {
          authState.register(signupData)
        } catch (e) {
          alert(e);
          console.log(e)
        }
      } else {
        alert("all Fields are required")
      }
    } else {
      alert("Confrim password is not matching")
    }
  }

    return (
      <Background>
        <Spinner visible={authState.isLoading} />
        <View style={sty.body}>
          <Text style={sty.title}>Truth Finder</Text>
          <Text style={sty.title2}>Let's Find Together</Text>
          <Text style={sty.title3}>Create your account</Text>
          <Field placeholder="First Name" value={signupData.firstname} key="1" onChangeText={(e) => handleData({value: e, name:"firstname"})} />
          <Field placeholder="Last Name" value={signupData.lastname} key="2" onChangeText={(e) => handleData({value: e, name:"lastname"})} />
          <Field placeholder="Email" value={signupData.email} keyboardType={"email-address"} key="3" onChangeText={(e) => handleData({value: e, name:"email"})} />
          <Field placeholder="Password" value={signupData.password} secureTextEntry={true} key="4" onChangeText={(e) => handleData({value: e, name:"password"})} />
          <Field placeholder="Confrim Password" value={signupData.cpassword} secureTextEntry={true} key="5" onChangeText={(e) => handleData({value: e, name:"cpassword"})} />
          <View
            style={{
              display:"flex", flexDirection:"row", width: "78%", paddingRight: 16
            }}
          >
            <Text style={{color: "grey", fontSize: 16}} >By signing in, you agree to our </Text>
            <Text style={{color: dark.sky, fontWeight:"bold", fontSize: 16}} >Term & Condition</Text>
          </View>
          <View
            style={{
              display:"flex", 
              flexDirection:"row", 
              width: "78%", 
              paddingRight: 16, 
              marginBottom: 50,
              justifyContent: "center"
            }}
          >
            <Text style={{color: "grey", fontSize: 16}} >and {" "}</Text>
            <Text style={{color: dark.sky, fontWeight:"bold", fontSize: 16}} >Privacy Policy</Text>
          </View>

          <Btn textColor={dark.white} bgColor={dark.sky} btnLabel="Signup" Press={()=> onSubmit()} />
        </View>

        <View style={sty.dha}>
            <Text style={sty.textStyle}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
            <Text style={sty.textStyle2}>Login</Text>
            </TouchableOpacity>
        </View>

        </Background>
      );
}


const sty = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
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

export default SignUp