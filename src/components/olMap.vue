<template>
    <div ref="olMapRef" />
</template>

<script setup lang="ts">
import { useOl } from '@/composables/useOl';
import { View } from 'ol';
import type { Coordinate } from 'ol/coordinate';
import { useGeographic } from 'ol/proj';
import { onMounted, ref } from 'vue';

// TODO: does it work with permalink?

const { init, map, ready } = useOl()

// TODO: add type
const olMapRef = ref()

interface Props {
    // TODO: ensure it has valid value
    initialZoom?: number
    initialCenter?: Coordinate
}

const props = defineProps<Props>()
onMounted(() => {
    useGeographic()

    const view = new View({
        center: props.initialCenter || [10, 48],
        zoom: props.initialZoom || 4,
    })
    if (!ready.value) {
        init(olMapRef.value, view)
    } else {
        map.value?.setTarget(olMapRef.value)
    }
})
</script>