<template>
  <section class="carousel">

    <q-carousel
    v-model="activeSlide"
    animated
    arrows
    infinite
    height="400px"
  >
    <q-carousel-slide
      v-for="(slide, index) in slides"
      :key="index"
      :name="index"
      :img-src="slide.img"
    >
      <div class="q-pa-md text-white">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.description }}</p>
      </div>
    </q-carousel-slide>
  </q-carousel>

  </section>
    
  



  <hr style="border: 2px solid white; width: 95%; margin: 20px 0;">
  <main>
    <div class="containerRooms">
      <div class="rooms" v-for="habitacion in habitaciones" :key="habitacion">
        <h2>{{ habitacion.nombre }}</h2>
        <img :src="habitacion.imagen" alt="">
        <p>{{ habitacion.descripcion }}</p>
        <p>Precio:${{ habitacion.precio }}</p>
        <q-btn>Reservar</q-btn>
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

  import {ref} from 'vue'

  const habitaciones = ref([
  { nombre: "SUITE DELUXE", precio: "220", imagen: "https://tse3.mm.bing.net/th?id=OIG4.bl0grvcs6F.lKm8ztc_d&pid=ImgGn", descripcion: "Suite elegante y espaciosa con comodidades modernas" },
  { nombre: "SUITE DELUXE", precio: "120", imagen: "https://tse3.mm.bing.net/th?id=OIG2.E16Kddi5isOlEiZsBbVn&pid=ImgGn", descripcion: "Suite lujosa con vistas impresionantes" },
  { nombre: "HABITACIÓN FAMILIAR", precio: "220", imagen: "https://tse4.mm.bing.net/th?id=OIG4.YmNqDKMpcqnVRb06EFhx&pid=ImgGn", descripcion: "Habitación cómoda para toda la familia" },
  { nombre: "HABITACIÓN FAMILIAR", precio: "220", imagen: "https://tse2.mm.bing.net/th?id=OIG4.7DTqamFO_d8MQm.EvKWz&pid=ImgGn", descripcion: "Alojamiento espacioso para estancias familiares" },
  { nombre: "HABITACIÓN SAMGLY", precio: "220", imagen: "https://tse1.mm.bing.net/th?id=OIG4.GYVLx9Ugn_roJfWvMZA5&pid=ImgGn", descripcion: "Habitación acogedora con todas las comodidades esenciales" },
  { nombre: "HABITACIÓN FAMILIAR", precio: "226", imagen: "https://tse1.mm.bing.net/th?id=OIG1.5oLpGy4YYiXeYesQbtJX&pid=ImgGn", descripcion: "Perfecto para familias que buscan confort" },
  { nombre: "HABITACIÓN FAMILIAR", precio: "226", imagen: "https://tse4.mm.bing.net/th?id=OIG3.tKaKxmhyayqLVmIrrjyl&pid=ImgGn", descripcion: "Espacio ideal para vacaciones familiares" },
  { nombre: "HABITACIÓN FAMILIAR", precio: "226", imagen: "https://tse3.mm.bing.net/th?id=OIG2.hftpH4duE.XAqv.RaPVP&pid=ImgGn", descripcion: "Amplio y cómodo para familias" },
  { nombre: "SUITE AUUZE", precio: "226", imagen: "https://tse3.mm.bing.net/th?id=OIG3.lEmLCm.YqvySbAZRMY85&pid=ImgGn", descripcion: "Suite exclusiva con características premium" },
  { nombre: "SUITE JAUGLE", precio: "226", imagen: "https://tse1.mm.bing.net/th?id=OIG3.VcY1Vyojlh8CikfODCOu&pid=ImgGn", descripcion: "Suite temática única para amantes de la aventura" },
  { nombre: "HABITACIÓN INDIVIDUAL", precio: "230", imagen: "https://tse2.mm.bing.net/th?id=OIG3.zlVPt.SLWFnug0qlYhBM&pid=ImgGn", descripcion: "Habitación compacta y elegante para viajeros solos" },
  { nombre: "SUITE KANDENTAL", precio: "226", imagen: "https://tse2.mm.bing.net/th?id=OIG4.My.SLC_3yf.0VmGJWx_S&pid=ImgGn", descripcion: "Suite elegante con un toque de lujo" },
  { nombre: "SUITE PRESIDENCIAL", precio: "226", imagen: "https://tse2.mm.bing.net/th?id=OIG1.49HAG68oK2TGqA3HNEi0&pid=ImgGn", descripcion: "El lujo definitivo para huéspedes exigentes" },
  { nombre: "SUITE PREMIDENTAL", precio: "220", imagen: "https://tse2.mm.bing.net/th?id=OIG3.E057Jzt8SZy359v70Bmk&pid=ImgGn", descripcion: "Suite premium con comodidades exclusivas" },
  { nombre: "SUITE PRESIDENCIAL", precio: "220", imagen: "https://tse1.mm.bing.net/th?id=OIG3.MoMUrPyU4Wx5mJb1jJ13&pid=ImgGn", descripcion: "Suite de primera clase para una estancia memorable" },
]);


const activeSlide = ref(0);
    
const slides = [
  {
    title: 'Suite Deluxe',
    description: 'Disfruta de una estancia lujosa en nuestra Suite Deluxe, equipada con todas las comodidades modernas.',
    img: 'https://tse3.mm.bing.net/th?id=OIG4.bl0grvcs6F.lKm8ztc_d&pid=ImgGn'
  },
  {
    title: 'Habitación Familiar',
    description: 'Nuestra habitación familiar es espaciosa y perfecta para acomodar a toda la familia con comodidad y estilo.',
    img: 'https://tse2.mm.bing.net/th?id=OIG4.7DTqamFO_d8MQm.EvKWz&pid=ImgGn'
  },
  {
    title: 'Suite Presidencial',
    description: 'Experimenta el lujo definitivo en nuestra Suite Presidencial, diseñada para huéspedes exigentes con un toque de elegancia.',
    img: 'https://tse2.mm.bing.net/th?id=OIG1.49HAG68oK2TGqA3HNEi0&pid=ImgGn'
  },
  {
    title: 'Habitación Individual',
    description: 'Ideal para viajeros solos, nuestra habitación individual ofrece un espacio compacto y elegante para tu comodidad.',
    img: 'https://tse2.mm.bing.net/th?id=OIG3.zlVPt.SLWFnug0qlYhBM&pid=ImgGn'
  },
  {
    title: 'Suite Premium',
    description: 'Relájate en nuestra Suite Premium, que combina lujo y confort con vistas impresionantes.',
    img: 'https://tse2.mm.bing.net/th?id=OIG3.E057Jzt8SZy359v70Bmk&pid=ImgGn'
  }
];


</script>

<style src="../styles/habitaciones.css" scoped></style>