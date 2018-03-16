import { combineReducers } from 'redux'

function countAge(state = 0, action) {
    switch (action.type) {
        case "UPAGE":
            return state + 1
        case "DOWNAGE":
            return state - 1
        default:
            return state
    }
}


const initialState = {isFailed: false, data: null}
function users(state = initialState, action) {
    switch (action.type) {
        case "LOAD_USERS":
            return {...state, isFailed: false, data: action.payload}
        case "LOAD_USERS_FAILED":
            return {...state, isFailed: true, data: action.payload}
        default:
            return state
    }
}

const initialAlbum = {isFailed: false, data: null, isLoading: false}
function albums(state = initialAlbum, action) {
    switch (action.type) {
        case "LOAD_ALBUMS_PENDING":
        return {...state, isFailed: false, data: null, isLoading: true}
        case "LOAD_ALBUMS":
            return {...state, isFailed: false, data: action.payload, isLoading: false}
        case "LOAD_ALBUMS_FAILED":
            return {...state, isFailed: true, data: action.payload, isLoading: false}
        default:
            return state
    }
}


const initialPhotos = {isFailed: false, data: null, isLoading: false}
function photos(state = initialPhotos, action) {
    switch (action.type) {
        case "LOAD_PHOTOS_PENDING":
        return {...state, isFailed: false, data: null, isLoading: true}
        case "LOAD_PHOTOS":
            return {...state, isFailed: false, data: action.payload, isLoading: false}
        case "LOAD_PHOTOS_FAILED":
            return {...state, isFailed: true, data: action.payload, isLoading: false}
        default:
            return state
    }
}


const reducers = combineReducers({
    counter: countAge,
    users,
    albums,
    photos
})

export default reducers