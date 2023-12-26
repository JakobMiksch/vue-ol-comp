<template>
  <div :style="{ display: 'flex' }">
    <olMap :style="{ minWidth: '100px', width: '80%' }" />
    <MapExtraPanel :style="{ minWidth: '100px', width: '20%', 'margin-left': '5px' }" />
  </div>
</template>

<script setup lang="ts">
import olMap from '@/components/olMap.vue'
import MapExtraPanel from '@/components/MapExtraPanel.vue'
</script>
