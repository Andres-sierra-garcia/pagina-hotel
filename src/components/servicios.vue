<template>

    <div class="containerWelcome">
        <div class="title">
            <h1>¡Bienvenido a un Mundo de Comodidad y Relax!</h1>
            <p>Descubre una variedad de servicios diseñados para hacer que tu estancia sea inolvidable. Desde relajantes
                tratamientos de spa , servicio de transporte , gimnasio y algunas actividades recreativas, tenemos algo
                para todos.</p>
        </div>
        <div class="q-pa-md">
            <q-carousel animated v-model="slide" arrows navigation infinite>
                <q-carousel-slide :name="1" img-src="../assets/gymService.jpg" />
                <q-carousel-slide :name="2" img-src="../assets/poolService.jpg" />
                <q-carousel-slide :name="3" img-src="../assets/spaService.jpg" />
                <q-carousel-slide :name="4" img-src="../assets/transportService.jpg" />
            </q-carousel>
        </div>  
    </div>
    <div class="servicesTitle">
        <hr id="linea">
        <h2>Disfruta de lo mejor</h2>
        <hr>
    </div>

    <main>

        <div class="servicesDiv">
            <div class="services">
                <h3>Servicio de spa</h3>
                <img src="../assets/spaService.jpg" alt="">
                <p>Disgfruta de una experiencia de spa, degusta gastronomia local y mucho más</p>
                <q-btn>ver  mas...</q-btn>
            </div>

            <div class="services">
                <h3>Servicio de transporte</h3>
                <img src="../assets/transportService.jpg" alt="">
                <p>Disfruta de una experiencia de transporte, degusta gastronomia local y mucho más</p>
                <q-btn>ver  mas...</q-btn>
            </div>

            <div class="services">
                <h3>Servicio de Gimnasio</h3>
                <img src="../assets/gymService.jpg" alt="">
                <p>Disfruta de una experiencia de Gimnasio, degusta gastronomia local y mucho más</p>
                <q-btn>ver  mas...</q-btn>
            </div>

            <div class="services">
                <h3>Servicio de piscina</h3>
                <img src="../assets/poolService.jpg" alt="">
                <p>Disfruta de una experiencia de piscina, degusta gastronomia local y mucho más</p>
                <q-btn>ver  mas...</q-btn>

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

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            slide: ref(1)
        }
    }
}
</script>

<style src="../styles/servicios.css" scoped></style>