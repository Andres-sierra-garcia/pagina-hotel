import login from '../components/login.vue';
import home from '../components/home.vue';
import habitaciones from '../components/habitaciones.vue'
import servicios from '../components/servicios.vue'
import deportes from '../components/deportes.vue'
import contactos from '../components/contactos.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes =[
    {path:'/home', component:home},
    {path: '/', component:login},
    {path:'/habitaciones', component:habitaciones},
    {path:'/servicios', component:servicios},
    {path:'/deportes', component:deportes},
    {path:'/contactos', component:contactos}
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})
