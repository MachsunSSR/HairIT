import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import History from "../screens/History";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}