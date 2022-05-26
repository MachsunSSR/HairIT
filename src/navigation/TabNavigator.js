import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import History from "../screens/History";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

import { Feather,FontAwesome,MaterialCommunityIcons  } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

export default TabNavigator = () => {
    return (
    <Tab.Navigator screenOptions={{
    tabBarShowLabel: false,
    headerShown: false, 
    tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',


        // Max Height...
        height: 60,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        // Shadow...
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10
        },
        paddingHorizontal: 20,
      }}}
    
    >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={size} color={color}/>
          ),
        }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
        />
        <Tab.Screen 
        name="History" 
        component={History} 
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
          ),
        }}
        />
        
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
        />
    </Tab.Navigator>
    )
}