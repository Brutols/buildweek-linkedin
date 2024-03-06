import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import profilesReducer from "./Slices/profilesSlice"

const reducer = combineReducers({
  profilesData: profilesReducer,
})

const store = configureStore({reducer})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


//! BOOTSTRAP
//! AXIOS
//! REDUX
//! CSS