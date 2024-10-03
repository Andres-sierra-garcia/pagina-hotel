<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-tabs v-model="tab" indicator-color="yellow" class="bg-primary text-white shadow-2">
            <q-route-tab to="/" name="home" icon="home" label="Inicio" />
            <q-route-tab to="/home" name="home" icon="home" label="casa" />
            <q-route-tab to="/habitaciones" name="habitaciones" icon="bed" label="habitaciones" />
            </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>



<script>

import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}

</script>
