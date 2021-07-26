import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './MainNavigator'
import Login from '../Screens/Login'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()



const AppStack = (props) => {

    const getToken = async () => {
        const value = await AsyncStorage.getItem('token')
        if(value !== null){
            props.checkToken()
        }

    }

    useEffect(() => {
        getToken()
    }, [])

    return (
        <Stack.Navigator headerMode='none'>
            {
                props.verify ?
              <Stack.Screen name="Dashboard" component={MainNavigator} /> :
              <Stack.Screen name="Login" component={Login} />
              
            }
              
          </Stack.Navigator>
    )
}

const mapStateToProps = (state) =>   ({
    verify: state.auth.isLoggedIn
  })
  const mapDispatchToProps = (dispatch) =>   ({
    checkToken: () => dispatch({type: 'VERIFY_LOGIN'})
  })

export default connect(mapStateToProps, mapDispatchToProps)(AppStack)

const styles = StyleSheet.create({})
