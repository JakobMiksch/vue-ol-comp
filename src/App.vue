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
import { fromLonLat } from 'ol/proj'
import { onMounted } from 'vue'
import { useOl } from './composables/useOl'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const { map } = useOl()

onMounted(() => {
  map.value.addLayer(
    new TileLayer({
      source: new OSM()
    })
  )

  map.value.getView().setCenter(fromLonLat([11, 47]))
  map.value.getView().setZoom(15)
})
</script>
