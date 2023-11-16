<template>
  <div>
    <h1>map A</h1>
  </div>

  <MapExtraPanel></MapExtraPanel>

  <olMap :initialView="new View({ center: [10, 48], zoom: 15 })" :style="{ width: '500px', height: '500px' }" />
</template>

<script setup lang="ts">

import MapExtraPanel from '@/components/MapExtraPanel.vue';
import olMap from '@/components/olMap.vue';
import { useOl } from '@/composables/useOl';
import { View } from 'ol';

const {onMapClick} = useOl()

onMapClick((event)=>{
  const {target} = event
  console.log(event)
}) 

// TODO: activate somehow that it is only added once
// map.value?.addLayer(new VectorLayer({
//     source: new VectorSource({
//         features: [new Feature(new Point([10.5, 48.5]))]
//     })
// }))

</script>

<style></style>
