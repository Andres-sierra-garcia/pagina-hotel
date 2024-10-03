import login from '../components/login.vue';
import home from '../components/home.vue';
import habitaciones from '../components/habitaciones.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes =[
    {path:'/home', component:home},
    {path: '/', component:login},
    {path:'/habitaciones', component:habitaciones}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})
