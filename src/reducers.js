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

const initialAlbum = {isFailed: false, data: null}
function albums(state = initialAlbum, action) {
    switch (action.type) {
        case "LOAD_ALBUMS":
            return {...state, isFailed: false, data: action.payload}
        case "LOAD_ALBUMS_FAILED":
            return {...state, isFailed: true, data: action.payload}
        default:
            return state
    }
}


const reducers = combineReducers({
    counter: countAge,
    users,
    albums,
})

export default reducers