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
import { useOl } from '@/composables/useOl'

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

/**
 * Convert a number array to a human readable string separated by commas
 * @param numberArray The number array
 * @returns The numbers separated by commans
 */
const humanizeNumberArray = (numberArray: readonly number[] | number[] | undefined): string =>
  numberArray ? numberArray.map(Math.round).join(', ') : ''

const listEntries = computed(() => [
  { title: 'Count Layers', value: layers.value ? layers.value.length : 'invalid' },
  { title: 'Center', value: humanizeNumberArray(center?.value) },
  { title: 'Zoom', value: `${zoomRounded.value}, ${zoom.value?.toFixed(2)}` },
  { title: 'Extent', value: humanizeNumberArray(extent.value) },
  { title: 'Map Loading', value: mapLoading.value ? '🟢' : '🔴' },
  { title: 'Map Moving', value: mapMoving.value ? '🟢' : '🔴' },
  { title: 'Pointer Coordinate', value: humanizeNumberArray(pointerCoordinate.value) },
  { title: 'Pointer Pixel', value: humanizeNumberArray(pointerPixel.value) }
])
</script>
