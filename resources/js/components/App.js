import React, {Suspense} from 'react';
//import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import { Route, Switch, HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import './assets/scss/style.css';

export default function App() {
    return (
    <Provider store={store}>
        <Suspense fallback={<div className="loading" />}>
            <HashRouter>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component} />;
                    })}
                </Switch>
            </HashRouter>
        </Suspense>
    </Provider>
    );
}

