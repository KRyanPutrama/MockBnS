import { takeLatest,put } from "@redux-saga/core/effects";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (value) => {
    await AsyncStorage.setItem('token', value)
}

const removeToken = async () => {
    await AsyncStorage.removeItem('token')
}

function* login(action) {
    try {

        const resLogin = yield axios({
            method: 'POST',
            url: 'https://blogger-glints.herokuapp.com/user/login',
            data: action.data
        })
        console.log(resLogin.data)

        yield storeToken(resLogin.data.token)
        
        yield put({type:'LOGIN_SUCCESS'})
        console.log("Login Sucess")

    } catch (err){
        console.log(err)
        yield put({type: 'LOGIN_FAILED'})
        console.log("Login Failed")
    }
}

function* logout(action) {
    try{
        yield removeToken()
    }
    catch (err) {
        console.log(err)
    }
}

export default function* loginSaga() {
    yield takeLatest('LOGIN', login)
    yield takeLatest('LOGOUT', logout)
}