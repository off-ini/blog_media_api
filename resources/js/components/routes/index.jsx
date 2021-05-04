import React from 'react';

const Fulllayout = React.lazy(() => import('../layouts/fulllayout.jsx' ));
const Login = React.lazy(() => import('../views/login/login' ));

var indexRoutes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Starter', component: Fulllayout },
];

export default indexRoutes;
