import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules/reducers'
import { Provider } from 'react-redux'

import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import { Router } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import Socket from './socket'

const customHistory = createBrowserHistory()

const store = createStore(rootReducer, applyMiddleware(
  ReduxThunk.withExtraArgument({ history: customHistory }),
  logger
))

Socket.setStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
