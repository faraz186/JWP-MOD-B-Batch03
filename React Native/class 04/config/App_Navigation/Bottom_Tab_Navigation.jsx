import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Profile from '../../Screens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Contact from '../../Screens/Contact';

const Tab = createBottomTabNavigator();

const Bottom_Tab_Navigation = () => {
  return (
   <Tab.Navigator
   initialRouteName='Profile'
   
   screenOptions={{
    tabBarActiveTintColor:'white',
    tabBarInactiveTintColor:'black',
    tabBarActiveBackgroundColor:'black',
    tabBarInactiveBackgroundColor:'white'
   }}
   
   >
    <Tab.Screen options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='home' size={30} />
      }
    }} name='Home' component={Home} />
    <Tab.Screen 
    options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='infocirlceo' size={30} />
      }
    }}
     name='About' component={About} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name='person-circle-outline' size={30} />
      }
    }}
    name='Profile' component={Profile} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='phone' size={30} />
      }
    }}
    name='Contact' component={Contact} />
   </Tab.Navigator>
  )
}

export  {Bottom_Tab_Navigation}