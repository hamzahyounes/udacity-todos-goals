import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers' //That will call the file of index.js (a default behavior)
import middleware from './middleware' //The same technique as above
import App from './components/App'
import './index.css'
import thunk from 'redux-thunk'
import logger from './middleware/logger'
import checker from './middleware/checker'

const store = createStore(reducer, applyMiddleware(thunk, logger, checker));

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>
    , document.getElementById('root'))
