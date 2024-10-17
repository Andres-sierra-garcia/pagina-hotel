<template>
  <header>
    <q-toolbar>
      <div class="logoTitle">
        <img src="./assets/icon.jpg" alt="">
        <h1>Villa Emily</h1>
      </div>
      <div class="navButtons">
        <q-btn icon="home" to="/"><p class="textBtn">Inicio</p></q-btn>
        <q-btn icon="bed" to="/habitaciones"><p class="textBtn">Habitaciones</p></q-btn>
        <q-btn icon="room_service" to="/servicios"><p class="textBtn">Servicios</p></q-btn>
        <q-btn icon="sports" to="/deportes"><p class="textBtn">Deportes</p></q-btn>
        <q-btn icon="phone" to="/contactos"><p class="textBtn">Contactos</p></q-btn>
        <q-btn icon="login" to="/login"><p class="textBtn">iniciar Sesion</p></q-btn>

      </div>
    </q-toolbar>
  </header>

  <div class="container">
  <router-view />
  </div>
</template>




