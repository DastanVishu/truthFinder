// In App.js in a new project

import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Spinner from 'react-native-loading-spinner-overlay';

import SignIn from '../pages/Signup/SignIn';
import Dashboard from '../pages/alltruth/Dashboard/Dashboard';
import Recoding from '../pages/alltruth/Recoding/Recoding';
import Contact from '../pages/alltruth/Contacts/Contact';
import CallLogs from '../pages/alltruth/CallLogs/CallLogs';

import { AuthContext } from '../context/AuthContext';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import SignUp from '../pages/Signup/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen (props) {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveBackgroundColor: "red"
        tabBarActiveTintColor: "black"
      }}
    >
      <Tab.Screen name="Dashboard"
      options={{
        tabBarLabel: "Dashboard",
        tabBarIcon: ({color, size}) => <Icon name="view-dashboard" size={30} color="#900" />
      }}
      component={Dashboard} />
      <Tab.Screen name="CallLogs" component={CallLogs} />
      <Tab.Screen name="Recoding" component={Recoding} />
      <Tab.Screen name="Contacts" component={Contact} />
    </Tab.Navigator>
  )
}

function Spin (props) {
  return <View>
    <Spinner visible={true} />
  </View>
}

const Router = () => {
  const [resetRoute, setResetRoute] = useState(false)
  const isLogin = useContext(AuthContext)
  const [logintrue, setLoginTrue] = useState(null)
  useEffect(()=>{
    if(!isLogin.islogin){
      isLogin.isLoggedin();
    } else {
      setLoginTrue(isLogin.islogin)
    }
  },[isLogin.islogin])

  return (
    <Stack.Navigator>
      {
        logintrue == true ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="menu" component={TabScreen} />
          </Stack.Group>
        ): logintrue == false?(
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen 
              name="login" 
              component={SignIn}
              />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        ): logintrue == null? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="spin" component={Spin} />
          </Stack.Group>
        ) : null
      }
    </Stack.Navigator>
  );
}

export default Router;