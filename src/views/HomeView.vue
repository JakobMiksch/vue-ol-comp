<template>
  <div :style="{ display: 'flex' }">
    <OlMap :style="{ minWidth: '100px', width: '80%' }" />

    <div
      :style="{
        minWidth: '100px',
        width: '20%',
        'padding-left': '5px',
        'border-left': '1px solid black'
      }"
    >
      <MapControlPanel />
      <MapInfoPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import OlMap from '../components/OlMap.vue'
import MapInfoPanel from '../components/MapInfoPanel.vue'
import MapControlPanel from '../components/MapControlPanel.vue'
</script>
