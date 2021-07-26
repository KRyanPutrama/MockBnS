import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        let newData = {
            username,
            password
        }
        props.login(newData)
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>SIGN IN</Text>
                <TextInput placeholder="Username" 
                style={styles.textInputBox} 
                onChangeText={(value) => setUsername(value)}
                value={username}
                />
                <TextInput placeholder="password" 
                style={styles.textInputBox} 
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={() => handleLogin()}>
                    <Text style={{color:'white', fontSize: 16}}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text>Don't have an account yet? </Text>
                    <TouchableOpacity>
                        <Text style={{color: 'blue'}}>Sign Up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    verify: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    login: (dataLogin) => dispatch({type: 'LOGIN', data: dataLogin})
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor: 'grey'
    },
    card: {
        width: 300, 
        height: 300, 
        backgroundColor:'white', 
        alignItems: 'center', 
        justifyContent:'center'
    },
    textInputBox : {
        borderWidth:1, 
        width:200,
        marginVertical: 10
    },
    buttonLogin : {
        backgroundColor:'dodgerblue', 
        width:200,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})
