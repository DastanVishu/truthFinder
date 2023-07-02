// In App.js in a new project

import React, {useState, useEffect, useContext} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../pages/header/header';

import SignIn from '../pages/Signup/SignIn';
import Dashboard from '../pages/alltruth/Dashboard/Dashboard';
import Recoding from '../pages/alltruth/Recoding/Recoding';
import Contact from '../pages/alltruth/Contacts/Contact';
import CallLogs from '../pages/alltruth/CallLogs/CallLogs';
import SignUp from '../pages/Signup/SignUp';
import Profile from '../pages/profile/profile';

import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen (props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        // tabBarInactiveTintColor
        // tabBarActiveBackgroundColor: "red",
        tabBarActiveTintColor: "#900",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50
        }
        
      }}
    >
      <Tab.Screen name="Dashboard"
      options={{
        tabBarLabel: "Dashboard",
        tabBarIcon: ({color, size}) => <Icon name="desktop-outline" size={30} color={color} />,
        header: (props) => <Header props={props} /> 
      }}
      component={Dashboard} />
      <Tab.Screen name="CallLogs"
      options={{
        tabBarLabel: "Call logs",
        tabBarIcon: ({color, size}) => <Icon name="call-outline" size={30} color={color} />,
        header: (props) => <Header props={props} /> 
      }}
       component={CallLogs} />
      <Tab.Screen name="Recoding" 
      options={{
        tabBarLabel: "Recoding",
        tabBarIcon: ({color, size}) => <Icon name="recording-outline" size={30} color={color} />,
        header: (props) => <Header props={props} /> 
      }}
      component={Recoding} />
      <Tab.Screen name="Contacts" 
      options={{
        tabBarLabel: "Contacts",
        tabBarIcon: ({color, size}) => <Icon name="people-circle-outline" size={30} color={color} />,
        header: (props) => <Header props={props} /> 
      }}
      component={Contact} />
      <Tab.Screen name="Profile" 
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({color, size}) => <Icon name="person-circle" size={30} color={color} />,
        header: (props) => <Header props={props} /> 
      }}
      component={Profile} />
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
      setLoginTrue(isLogin.islogin)
      isLogin.isLoggedin();
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