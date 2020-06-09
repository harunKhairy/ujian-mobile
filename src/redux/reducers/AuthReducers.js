import { LOGIN, LOGOUT, GET_PHOTO, CHANGE_PHOTO_PROFILE } from '../types'

const INITAL_STATE = {
    username: '',
    listPhotos: [],
    displayPicture: ''
}

export const AuthReducers = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, username: action.payload }
        case GET_PHOTO:
            return { ...state, listPhotos: action.payload }
        case CHANGE_PHOTO_PROFILE:
            return { ...state, displayPicture: action.payload }
        case LOGOUT:
            return { ...state, username: null }
        default:
            return state
    }
}