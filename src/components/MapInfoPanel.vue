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

const humanize = (content: readonly any[] | any[] | undefined): string => {
  if (!content) {
    return ''
  }
  return content.map(Math.round).join(', ')
}
const listEntries = computed(() => [
  { title: 'Count Layers', value: layers.value ? layers.value.length : 'UNGÜLTIG' },
  { title: 'Center', value: humanize(center?.value) },
  { title: 'Zoom', value: `${zoomRounded.value}, ${Math.round((zoom.value || 0) * 100) / 100}` },
  { title: 'Extent', value: humanize(extent.value) },
  { title: 'Map Loading', value: mapLoading.value ? '🟢' : '🔴' },
  { title: 'Map Moving', value: mapMoving.value ? '🟢' : '🔴' },
  { title: 'Pointer Coordinate', value: humanize(pointerCoordinate.value) },
  { title: 'Pointer Pixel', value: humanize(pointerPixel.value) }
])
</script>
