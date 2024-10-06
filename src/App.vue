<template>
<header>
  <q-toolbar>
    <div class="logoTitle">
      <img src="./assets/icon.jpg" alt="">
      <h1>Villa Emily</h1>
    </div>
    <div class="navButtons">
      <q-btn icon="login" to="/">iniciar Sesion</q-btn>
      <q-btn icon="home" to="/inicio">Inicio</q-btn>
    <q-btn icon="bed" to="/habitaciones">Habitaciones</q-btn>
    <q-btn icon="room_service" to="/servicios">Servicios</q-btn>
    <q-btn icon="sports" to="/deportes">Deportes</q-btn>
    <q-btn icon="phone" to="/contactos">Contactos</q-btn>
    </div>
  </q-toolbar>
</header>

  <router-view/>
</template>



<script>

import { ref } from 'vue'


</script>
