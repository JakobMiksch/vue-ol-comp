<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <nav :style="{ display: 'flex', 'border-bottom': '1px solid black' }">
      <RouterLink
        v-for="(route, index) in routes"
        :key="index"
        class="router-link"
        :to="route.to"
        :style="currentRoute.path === route.to ? { 'font-weight': 'bold' } : {}"
      >
        {{ route.title }}
      </RouterLink>
    </nav>
    <RouterView style="flex-grow: 1" />
  </div>
</template>

<script setup lang="ts">
import { fromLonLat } from 'ol/proj'
import { onMounted } from 'vue'
import { useOl } from './composables/useOl'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { useRoute } from 'vue-router'
import { View } from 'ol'

const { map } = useOl()
const currentRoute = useRoute()

const routes = [
  { to: '/', title: 'Map and Info' },
  { to: '/only-map', title: 'Only Map' },
  { to: '/only-info', title: 'Only Info' }
]

onMounted(() => {
  map.value.addLayer(
    new TileLayer({
      source: new OSM()
    })
  )

  const view = map.value.getView()
  map.value.setView(
    new View({
      center: view.getCenter(),
      zoom: view.getZoom()
    })
  )

  map.value.getView().setCenter(fromLonLat([11, 47]))
  map.value.getView().setZoom(15)
})
</script>

<style>
.router-link {
  padding-right: 10px;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}

.router-link:visited {
  color: unset;
}
</style>
