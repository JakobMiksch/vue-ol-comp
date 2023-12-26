<template>
  <div>
    <div v-for="entry in listEntries" :key="entry.title">
      <b>
        {{ entry.title }}
      </b>
      <p :style="{ 'margin-top': 'unset' }">
        {{ entry.value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
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

const { round } = Math

const listEntries = computed(() => [
  { title: 'Count Layers', value: layers.value ? layers.value.length : 'UNGÜLTIG' },
  { title: 'Center', value: center.value?.map(round) },
  { title: 'Zoom', value: `${zoomRounded.value}, ${round(zoom.value * 100) / 100}` },
  { title: 'Extent', value: extent.value?.map(round) },
  { title: 'Map Loading', value: mapLoading.value ? '🟢' : '🔴' },
  { title: 'Map Moving', value: mapMoving.value ? '🟢' : '🔴' },
  { title: 'Pointer Coordinate', value: pointerCoordinate.value?.map(round) },
  { title: 'Pointer Pixel', value: pointerPixel.value?.map(round) }
])
</script>
