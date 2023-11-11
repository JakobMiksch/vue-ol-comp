<template>
  <div>
    <h1>map A</h1>
  </div>

  <MapExtraPanel></MapExtraPanel>

  <olMap :initial-zoom="10" :initial-center="[20, 48]" :style="{ width: '500px', height: '500px' }" ></olMap>
</template>

<script setup lang="ts">

import MapExtraPanel from '@/components/MapExtraPanel.vue';
import olMap from '@/components/olMap.vue';

</script>

<style></style>
