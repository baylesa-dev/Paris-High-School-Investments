import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { mainReducer, defaultState } from 'app/reducers'

import Root from 'app/views'

import { ROOT_NODE } from './constants'

import 'normalize.css'

const store = createStore(mainReducer, defaultState(), applyMiddleware(thunk))
const history = createBrowserHistory()

const render = () => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <Router history={history}>
                    <Root/>
                </Router>
            </Provider>
        ),
        ROOT_NODE as HTMLElement,
    )
}

render()