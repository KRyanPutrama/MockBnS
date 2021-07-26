import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../Screens/Home'
import Products from '../Screens/Products'
import Profile from '../Screens/Profile'
import Blog from '../Screens/Blog'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

const IconRoute = {
    Home : ['home', 'home-outline'],
    Shop : ['cart', 'cart-outline'],
    Blog : ['post', 'post-outline'],
    Profile: ['account-circle', 'account-circle-outline']
}

const MainNavigator = () => {
    return (
        <Tab.Navigator shifting={true} screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color}) => {
                let icon;
                focused ? icon = IconRoute[route.name][0] : icon = IconRoute[route.name][1]
                return <MaterialCommunityIcon name={icon} color={color} size={20} />
            }
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Shop" component={Products} />
            <Tab.Screen name="Blog" component={Blog} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})
