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


const reducers = combineReducers({
    counter: countAge,
})

export default reducers