import Axios from 'axios'
import { LOGIN, LOGOUT, CHANGE_PHOTO_PROFILE, GET_PHOTO } from '../types'
import  AsyncStorage from '@react-native-community/async-storage'
import {  API_URL } from '../../support/ApiUrl'

export const LoginSuccess = (username) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('token', username)
            dispatch ({ type: LOGIN, payload: username })
        } catch (error) {
            console.log(error)
        }
    }
}

export const KeepLogin = (token) => {
    return async (dispatch) => {
        try {
            dispatch ({ type: LOGIN, payload: token})
        } catch (error) {
            console.log(error)
        }
    }
}

export const UserLogout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('token')
        dispatch ({ type: LOGOUT })
    }
}


// export const GetDataPhoto = () => {
//     return async (dispatch) => {
//         try {
//             const response = await Axios.get(`${API_URL}`, { headers: {'x-api-key': 'e9af4de9-6b35-464d-b3a6-1d8ed94f1047'}})
//             dispatch ({ type: GET_PHOTO, payload: response.data })
//         } catch (err) {
//             console.log(err)
//         } 
//     }
// }
export const GetDataPhoto = (dispatch) => {
    return async () => {
            const response = await Axios.get(`${API_URL}`, { headers: {'x-api-key': 'e9af4de9-6b35-464d-b3a6-1d8ed94f1047'}})
            dispatch ({ type: GET_PHOTO, payload: response.data })
    }
}

export const DisplayPicture = (url) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CHANGE_PHOTO_PROFILE, payload: url})
        } catch (error) {
            console.log(error)
        }
    }
}