<template>
  <div>
    <h1>map A</h1>
  </div>

  <MapExtraPanel></MapExtraPanel>

  <p>COUNT: {{ count }}</p>
  <button @click="count++">+1</button>


  <div id="openlayers-map"/>
</template>

<script setup lang="ts">

import { onMounted} from 'vue'
import { useCount } from '@/composables/useCount'
import { useMap } from '@/composables/useMap'
import MapExtraPanel from '@/components/MapExtraPanel.vue';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';

const { count } = useCount()
const { initMap, olMap } = useMap()

onMounted(()=>{

  initMap('openlayers-map')

  setTimeout(()=>{
    olMap.value?.addLayer(new VectorLayer({
      source: new VectorSource({
        features: [new Feature(new Point([1056665.4790, 6565023.4854] ))]
      })
    }))
  }, 3000)

})

</script>

<style>


#openlayers-map {
  width: 500px;
  height: 500px;
}

</style>
