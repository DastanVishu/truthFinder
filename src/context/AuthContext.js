import AsyncStorage from "@react-native-async-storage/async-storage";
import Keychain from 'react-native-keychain';
import React, {createContext, useState} from 'react';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthState = (props) => {
    const navigation = useNavigation()
    const [userInfo, setUserInfo] = useState({});
    const [islogin, setIslogin] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = async (signupData) => {
        setisLoading(true);
        const jsonValue = JSON.stringify(signupData)
        await AsyncStorage.setItem("loign", jsonValue);
        await Keychain.setGenericPassword(signupData.email, signupData.password)
        .then(suc => {
            setisLoading(false);
        })
        navigation.navigate("login")
        alert("account is created successfuly")
    }

    const login = async (signinData) => {
        const {
            email,
            password
          } = signinData
        setisLoading(true);
        const jsonValue = JSON.stringify(signinData)
        const database = await AsyncStorage.getItem("loign");
        const datafound = JSON.parse(database)
        if(datafound.email === email && datafound.password === password){
          await AsyncStorage.setItem("login", jsonValue);
          setUserInfo(datafound);
          alert("welcome back "+datafound.firstname)
          setIslogin(true)
        } else {
          alert("wronge username or password")
        }
    }

    const isLoggedin = async () => {
        const loginData = await AsyncStorage.getItem("login");

        if(loginData){
            let data = JSON.parse(loginData);
            if(data.email && data.password){
                setIslogin(true)
            } else {
                setIslogin(false)
            }
        } else {
            setIslogin(false)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem("login");
        setUserInfo({})
        setIslogin(false)
    }

    return(
        <AuthContext.Provider value={{
            register, 
            login, 
            isLoggedin,
            logout,
            isLoading,
            userInfo,
            islogin
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}
