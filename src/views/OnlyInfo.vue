<template>
  <div :style="{ display: 'flex' }">
    <MapInfoPanel :style="{ width: '50%' }" />
    <MapControlPanel :style="{ width: '50%' }" />
  </div>
</template>

<script setup lang="ts">
import MapInfoPanel from '../components/MapInfoPanel.vue'
import MapControlPanel from '../components/MapControlPanel.vue'
</script>
