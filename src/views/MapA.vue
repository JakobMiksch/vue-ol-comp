<template>
  <div>
    <h1>map A</h1>
  </div>

  <MapExtraPanel></MapExtraPanel>

  <div ref="olMapRef" :style="{
    width: '500px',
    height: '500px'
  }" />
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { useOl } from '@/composables/useOl'
import MapExtraPanel from '@/components/MapExtraPanel.vue';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { View } from 'ol';
import { useGeographic } from 'ol/proj';

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
    olMap.value?.setTarget('')
    olMap.value?.setTarget(olMapRef.value)
  }
})

</script>

<style>
#openlayers-map {
  width: 500px;
  height: 500px;
}
</style>
