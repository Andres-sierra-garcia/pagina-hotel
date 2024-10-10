<template>
    <main>
        <section class="sectionWelcome">
            <div class="containerWelcome">
                <div class="welcomeSection">
                    <p>¡Bienvenido a nuestro hotel, donde el lujo y la comodidad se encuentran! Nuestras habitaciones
                        están
                        diseñadas para ofrecerte una experiencia única, combinando elegancia moderna con confort. Desde
                        amplias
                        suites con vistas panorámicas hasta acogedoras habitaciones estándar, cada espacio cuenta con
                        tecnología de
                        última generación y camas king-size. Disfruta de un descanso reparador en un entorno exclusivo,
                        acompañado
                        de un servicio personalizado que supera tus expectativas. ¡Tu estancia perfecta comienza aquí!
                    </p>
                    <div class="welcomeImages">
                        <p id="priceBanner">precios desde 500$</p>
                        <q-btn to="/habitaciones">Ver mas...</q-btn>
                    </div>
                </div>
            </div>
        </section>

        <section class="History">
            <div class="historyTitle">
                <hr>
                <h2>Nuestra Historia</h2>
                <hr>
            </div>
            <div class="containerHistory">
                <div class="partOne">
                    <div class="titleAndText">
                        <h2>Decada 1990</h2>
                        <p>En 1995, se inauguró el Hotel Villa Emily, un refugio diseñado para ofrecer una experiencia
                            única a los
                            viajeros. Desde sus inicios, el hotel se destacó por su arquitectura elegante y su enfoque
                            en la
                            hospitalidad, convirtiéndose rápidamente en un destino preferido para turistas y visitantes
                            locales. La
                            calidez de su personal y la atención al detalle establecieron los cimientos de una tradición
                            de
                            excelencia.</p>
                    </div>
                    <img src="../assets/hotel_1990.jpg" alt="">
                </div>
                <div class="partTwo">
                    <img src="../assets/hotel_2000.jpg" alt="">
                    <div class="titleAndText">
                        <h2>Decada 2000</h2>
                        <p>A mediados de los años 2000, el Hotel Villa Emily expandió sus servicios con la apertura de
                            un spa de
                            lujo y un restaurante gourmet, atrayendo a una clientela más diversa. La modernización de
                            las
                            habitaciones, que ahora incluían tecnología de vanguardia y comodidades personalizadas,
                            elevó aún más la
                            experiencia de los huéspedes. En esta década, el hotel recibió varios premios de la
                            industria,
                            consolidándose como un ícono de lujo y confort en la región.</p>
                    </div>
                </div>
                <div class="partThree">
                    <div class="titleAndText">
                        <h2>Decada 2010</h2>
                        <p>En la década de 2010, Hotel Villa Emily celebró su 20 aniversario, renovando su compromiso
                            con la
                            sostenibilidad y la responsabilidad social. Se implementaron prácticas ecológicas, como el
                            uso de energías
                            renovables y la reducción de desechos, y se lanzó un programa comunitario para apoyar a
                            negocios locales.
                            Esta iniciativa no solo mejoró su reputación, sino que también atrajo a un número creciente
                            de huéspedes
                            interesados en el turismo sostenible, asegurando un futuro brillante para el hotel.</p>
                    </div>
                    <img src="../assets/hotel_2010.jpg" alt="">
                </div>
            </div>
        </section>

        <section class="services">
            <div class="servicesTitle">
                <hr id="linea">
                <h2>Disfruta de lo mejor</h2>
                <hr>
            </div>

            <div class="servicesCards">

                <div class="cardRooms">
                    <p>Confort y elegancia en cada detalle. Descubre nuestras <strong>habitaciones</strong> equipadas
                        con todas
                        las comodidades que necesitas para una estancia inolvidable. ¡Reserva ahora y vive la
                        experiencia!</p>
                    <div class="btnRooms">
                        <q-btn to="/habitaciones">ver mas...</q-btn>
                    </div>
                </div>

                <div class="cardExtremeSports">
                    <p>Siente la adrenalina con nuestras actividades de <strong>deportes extremos.</strong> Desde el
                        rafting hasta
                        el parapente, vive emociones únicas rodeado de naturaleza. ¡Atrévete a la aventura!</p>
                    <div class="btnSports">
                        <q-btn to="/deportes">ver mas...</q-btn>
                    </div>
                </div>

                <div class="cardService">
                    <p>Disfruta de una experiencia excepcional con nuestros <strong>servicios</strong> de primera
                        calidad.
                        Relájate en el spa, degusta gastronomía local y mucho más. ¡Tu comodidad es nuestra prioridad!
                    </p>
                    <div class="btnService">
                        <q-btn to="/servicios">ver mas...</q-btn>
                    </div>
                </div>
            </div>
        </section>

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


    </main>
</template>
<script> 
</script>
<style src="../styles/home.css"></style>