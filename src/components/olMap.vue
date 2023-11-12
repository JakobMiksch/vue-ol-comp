<template>
    <div ref="olMapRef" />
</template>

<script setup lang="ts">
import { useOl } from '@/composables/useOl';
import { View } from 'ol';
import { onMounted, ref } from 'vue';

// TODO: does it work with permalink?

const { init, map, ready } = useOl()

// TODO: add type
const olMapRef = ref()

interface Props {
    initialView?: View
}

const props = defineProps<Props>()
onMounted(() => {

    if (ready.value) {
        map.value?.setTarget(olMapRef.value)
    } else {
        const view = new View({
            center:[10, 48],
            zoom:  4,
        })
        init(olMapRef.value, props.initialView || view)
    }
})
</script>