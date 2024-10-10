<template>
  <h1>¡Bienvenido a Nuestra Sección de Deportes</h1>
  <p> En nuestro hotel, fomentar un estilo de vida activo es esencial. Disfruta de nuestro gimnasio, clases de yoga, y
    actividades al aire libre como natación y ciclismo. ¡Explora nuestras instalaciones deportivas y empieza tu aventura
    con nosotros! </p>

  <main>

    <q-carousel v-model="activeSlide" animated arrows infinite height="400px">
      <q-carousel-slide v-for="(slide, index) in slides" :key="index" :name="index" :img-src="slide.img">
        <div class="q-pa-md text-white">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>



    <div class="footerTitle">
      <hr>
      <h2>Explora, elige y disfruta.</h2>
      <hr>
    </div>


    <div class="containerSports">
      <div class="cardSports" v-for="actividad in actividades" :key="actividad.nombre">
        <h3>{{ actividad.nombre }}</h3>
        <img :src="actividad.img" alt="">
        <p>{{ actividad.descripcion }}</p>
        <q-btn>ver mas...</q-btn>
      </div>
    </div>

  </main>


  <footer>
    <div class="footerTitle">
      <hr>
      <h2>Sobre nosotros </h2>
      <hr>
    </div>
    <div class="divInformation">
      <div class="main">
        <h3 class="titleInformation">principal</h3>
        <p>Inicio</p>
        <p>ofertas</p>
        <p>blog</p>
        <p>Noticias y eventos</p>
      </div>

      <div class="about">
        <h3 class="titleInformation">contact</h3>
        <p>Nombre: Villa Emily</p>
        <p>Direccion:me falta ponerla</p>
        <p>telefono:3223846533</p>
        <p>Correo: villaEmily@gmail.com</p>
      </div>

      <div class="recordingServices">
        <h3 class="titleInformation">Grabacion</h3>
        <p>Aventuras grabadas</p>
        <p>Bienvenida personalizada</p>
        <p></p>
      </div>


    </div>


  </footer>

</template>
<script setup>

import { ref } from 'vue'

const activeSlide = ref(0);


import golf from '../assets/golfSport.jpg'
import tenis from '../assets/tennisSport.jpg'
import yoga from '../assets/yogaSport.jpg'
import ciclismo from '../assets/ciclismo.jpg'
import futbol from '../assets/soccerSport.jpg'
const slides = [
  {
    title: 'Torneo de Golf',
    description: 'Únete a nuestro torneo de golf este viernes a las 8 AM en nuestro campo exclusivo. ¡No te lo pierdas!',
    img: golf
  },
  {
    title: 'Clase de Tenis para Principiantes',
    description: 'Aprende los fundamentos del tenis en nuestra clase para principiantes, este lunes a las 9 AM.',
    img: tenis
  },
  {
    title: 'Clase de Yoga al Amanecer',
    description: 'Disfruta de una clase de yoga al aire libre este sábado a las 7 AM. Relájate y encuentra tu equilibrio.',
    img: yoga
  },
  {
    title: 'Ruta de Ciclismo',
    description: 'Descubre paisajes impresionantes mientras recorres nuestra ruta de ciclismo, este martes a las 6 AM.',
    img: ciclismo
  },
  {
    title: 'Partido de Fútbol Amistoso',
    description: 'Participa en nuestro partido de fútbol amistoso este domingo a las 10 AM. ¡Diversión garantizada!',
    img: futbol
  }
];



import natacion from '../assets/swimming.jpg'
import senderismo from '../assets/hiking.jpg'
import voley from '../assets/volleyball.jpg'


const actividades = [
  {
    nombre: 'Natación',
    img: natacion,
    descripcion: 'Disfruta de nuestra piscina climatizada y relájate mientras nadas.'
  },
  {
    nombre: 'Ciclismo',
    img: ciclismo,
    descripcion: 'Explora los alrededores en bicicleta con nuestras rutas exclusivas.'
  },
  {
    nombre: 'Yoga',
    img: yoga,
    descripcion: 'Encuentra tu equilibrio y paz interior con nuestras clases de yoga.'
  },
  {
    nombre: 'Tenis',
    img: tenis,
    descripcion: 'Perfecciona tu técnica con clases de tenis para todos los niveles.'
  },
  {
    nombre: 'Golf',
    img: golf,
    descripcion: 'Únete a nuestro campo de golf y mejora tu swing en un entorno hermoso.'
  },
  {
    nombre: 'Fútbol',
    img: futbol,
    descripcion: 'Participa en partidos amistosos de fútbol, diversión garantizada.'
  },
  {
    nombre: 'Senderismo',
    img: senderismo,
    descripcion: 'Descubre paisajes increíbles con nuestras rutas de senderismo guiadas.'
  },
  {
    nombre: 'Voleibol',
    img: voley,
    descripcion: 'Únete a emocionantes partidos de voleibol en nuestras canchas.'
  }
];


</script>

<style src="../styles/deportes.css" scoped></style>