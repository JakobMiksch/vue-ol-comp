<template>
  <div>
    <p>EXTRA OL</p>
    <p>Count Layers: {{ layers ? layers.length : 'UNGÜLTIG' }}</p>
    <p>Center: {{ center }}</p>
    <p>Zoom: {{ zoomRounded }}, {{ zoom }}</p>
    <p>Extent: {{ extent }}</p>
    <p>Map Loading: {{ mapLoading }}</p>
    <p>Map Moving: {{ mapMoving }}</p>
    <p>Pointer Coordinate: {{ pointerCoordinate }}</p>
    <p>Pointer Pixel: {{ pointerPixel }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useOl } from '../composables/useOl'

const {
  layers,
  center,
  zoom,
  zoomRounded,
  extent,
  mapLoading,
  mapMoving,
  pointerCoordinate,
  pointerPixel
} = useOl()
</script>
