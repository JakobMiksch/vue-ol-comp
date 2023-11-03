<template>
  <div>
    <h1>map B</h1>
    <button @click="increaseZoom()">Zoom+1</button>
  </div>

  <MapExtraPanel></MapExtraPanel>



</template>

<script setup lang="ts">
import MapExtraPanel from '@/components/MapExtraPanel.vue';
import { useMap } from '@/composables/useMap';
const { increaseZoom } = useMap()


</script>

<style>

</style>
