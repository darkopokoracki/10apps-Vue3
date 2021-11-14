import {createRouter, createWebHistory} from 'vue-router'
import FootballPlayers from './pages/FootballPlayers'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Markdown from './pages/Markdown'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/football-players',
        component: FootballPlayers,
    },
    {
        path: '/calendar',
        component: Calendar,
    },
    {
        path: '/Markdown',
        component: Markdown,
    },
    {
        path: '/Slider',
        component: Markdown,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router
