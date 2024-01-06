<template>
  <div :style="{ display: 'flex' }">
    <button @click="changeZoom(1)">
      Zoom in
    </button>
    <button @click="changeZoom(-1)">
      Zoom out
    </button>
    <button @click="setRandomCenter()">
      Random center
    </button>
  </div>
</template>

<script lang="ts" setup>
import { fromLonLat } from 'ol/proj'
import { useOl } from '@/composables/useOl'

const { map, zoom } = useOl()

const changeZoom = (levels: number) => {
  const view = map.value.getView()
  const currentZoomLevel = zoom.value
  if (!currentZoomLevel) return
  const newZoomLevel = currentZoomLevel + levels
  if (newZoomLevel <= 0 || newZoomLevel > 28) return
  view.setZoom(newZoomLevel)
}

const setRandomCenter = () => {
  const [minLat, maxLat, minLon, maxLon] = [-85, +85, -180, +180]
  const lat = minLat + (maxLat - minLat) * Math.random()
  const lon = minLon + (maxLon - minLon) * Math.random()
  const newCenter = fromLonLat([lon, lat])
  map.value.getView().setCenter(newCenter)
}
</script>

<style scoped>
button {
  margin-right: 5px;
  font-weight: bold;
  height: fit-content;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #000;
  color: #fff;
}
</style>
