<template>
  <div ref="olMapRef" :style="{
    width: '500px',
    height: '500px'
  }" />
</template>

<script setup lang="ts">
import { useOl } from '@/composables/useOl';
import { View, Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import { useGeographic } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { onMounted, ref } from 'vue';

const { init, olMap, ready } = useOl()

const olMapRef = ref()

onMounted(() => {
  useGeographic()

  const view = new View({
    center: [10, 48],
    zoom: 6,
  })
  if (!ready.value) {
    init(olMapRef.value, view)
    olMap.value?.addLayer(new VectorLayer({
      source: new VectorSource({
        features: [new Feature(new Point([10.5, 48.5]))]
      })
    }))

  } else {
    olMap.value?.setTarget(olMapRef.value)
  }
})
</script>