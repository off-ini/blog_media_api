import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cookies from 'js-cookie';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import * as serviceWorker from './registerServiceWorker';

//const hist = createBrowserHistory();
const render = () => {
    ReactDOM.render(
        <SnackbarProvider maxSnack={2}>
            <App />
        </SnackbarProvider>
        ,document.getElementById('root')
    );
}

try{
    const token = Cookies.getJSON('User').auth.accessToken;
    if(token)
    {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}catch(e){}

render()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

