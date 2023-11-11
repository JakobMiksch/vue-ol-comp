<template>
    <div ref="olMapRef" />
</template>

<script setup lang="ts">
import { useOl } from '@/composables/useOl';
import { View, Feature } from 'ol';
import type { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import { useGeographic } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { onMounted, ref } from 'vue';

// TODO: does it work with permalink?

const { init, olMap, ready } = useOl()

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

        // TODO: remove or move somewhere else
        olMap.value?.addLayer(new VectorLayer({
            source: new VectorSource({
                features: [new Feature(new Point([10.5, 48.5]))]
            })
        }))

    } else {
        olMap.value?.setTarget(olMapRef.value)
    }
})
</script>