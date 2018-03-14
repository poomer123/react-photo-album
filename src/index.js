import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


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

const store = createStore(countAge)
store.subscribe(()=>{console.warn('subscribe', store.getState())})
store.dispatch({
    type: "UPAGE"
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
