<template>
  <header>
    <q-toolbar>
      <div class="logoTitle">
        <img src="./assets/icon.jpg" alt="">
        <h1>Villa Emily</h1>
      </div>
      <div class="navButtons">
        <q-btn icon="home" to="/">Inicio</q-btn>
        <q-btn icon="bed" to="/habitaciones">Habitaciones</q-btn>
        <q-btn icon="room_service" to="/servicios">Servicios</q-btn>
        <q-btn icon="sports" to="/deportes">Deportes</q-btn>
        <q-btn icon="phone" to="/contactos">Contactos</q-btn>
        <q-btn icon="login" to="/login">iniciar Sesion</q-btn>

      </div>
    </q-toolbar>
  </header>

  <div class="container">
  <router-view />
  </div>
</template>




