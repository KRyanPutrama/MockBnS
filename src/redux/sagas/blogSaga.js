import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects'

function* dataBlogs(action) {
    try {
        const resDataBlogs = yield axios.get('http://10.0.2.2:3000/posts')

        yield put({type: 'GET_DATA', data: resDataBlogs.data})
    } catch (err) {
        console.log(err)
    }
}

function* blogsSaga() {
    yield takeLatest('GET_DATA', dataBlogs)
}

export default blogsSaga