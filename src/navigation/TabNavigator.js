import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";

import Home from "../screens/Home";
import History from "../screens/History";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import CameraScreen from "../screens/CameraScreen";

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
        name="CameraScreen" 
        component={CameraScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{padding: 5, borderRadius: 100, backgroundColor: '#DCD7ED', width: 80, height: 80, justifyContent: 'center', alignItems:'center', marginBottom: 50}}>
              <View style={{padding: 5, borderRadius: 100, backgroundColor: '#6C5DD2', width: 60, height: 60, justifyContent: 'center', alignItems:'center'}}>
                <MaterialCommunityIcons name="face-recognition" size={24} color="white" />
              </View>
            </View>
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