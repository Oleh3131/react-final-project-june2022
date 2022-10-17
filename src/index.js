import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {App} from './App';
import {setUpStore} from "./redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();
root.render(

    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
