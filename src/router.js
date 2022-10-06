import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/dashboard',
            component: Dashboard,
        },
        {
            path: '/dashboard',
            component: Dashboard,
        },
        {
            path: '/perfil/:userid',
            component: Perfil,
        },
        {
            path: '/login',
            component: Login,
        },
    ]
});

export default router;