<template>
  <div>
    <h1>map A</h1>
  </div>

  <MapExtraPanel></MapExtraPanel>

  <olMap :initial-zoom="10" :initial-center="[20, 48]" :style="{ width: '500px', height: '500px' }" />
</template>

<script setup lang="ts">

import MapExtraPanel from '@/components/MapExtraPanel.vue';
import olMap from '@/components/olMap.vue';

// TODO: activate somehow that it is only added once
// map.value?.addLayer(new VectorLayer({
//     source: new VectorSource({
//         features: [new Feature(new Point([10.5, 48.5]))]
//     })
// }))

</script>

<style></style>
