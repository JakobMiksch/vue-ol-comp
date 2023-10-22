<template>
  <div>
    <h1>map A</h1>
  </div>
  <div id="openlayers-map"/>
</template>

<script setup lang="ts">

import { onMounted} from 'vue'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

onMounted(()=>{

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'openlayers-map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

})

</script>

<style>


#openlayers-map {
  width: 500px;
  height: 500px;
}

</style>
