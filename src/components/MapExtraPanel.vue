<template>

<div v-if="ready">
    <p>EXTRA OL</p>
    <p>Count Layers: {{ layers ? layers.length : "UNGÜLTIG" }}</p>
    <p>Center: {{center}}</p>
    <p>Zoom: {{zoomRounded}}, {{ zoom }}</p>
</div>

</template>

<script lang="ts" setup>
import { useOl } from '@/composables/useOl';

const {ready, layers, center, zoom, zoomRounded} = useOl()
</script>