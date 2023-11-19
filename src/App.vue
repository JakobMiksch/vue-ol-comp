<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> <br />
        <RouterLink to="/mapA">mapA</RouterLink> <br />
        <RouterLink to="/mapB">mapB</RouterLink> <br />
        <RouterLink to="/mapC">mapC</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { useGeographic } from 'ol/proj'
import { onMounted } from 'vue'
import { useOl } from './composables/useOl'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const { map } = useOl()

useGeographic()

onMounted(() => {
  // init map globally
  map.value.addLayer(
    new TileLayer({
      source: new OSM()
    })
  )
  // init(new View({ center: [11, 47], zoom: 18 }))
})
</script>
