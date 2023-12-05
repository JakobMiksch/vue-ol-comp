<template>
  <div ref="olMapRef" />
</template>

<script setup lang="ts">
import { useOl } from '../composables/useOl'
import { onMounted, ref } from 'vue'

const { map } = useOl()

const olMapRef = ref<InstanceType<typeof HTMLDivElement>>()

onMounted(() => {
  map.value?.setTarget(olMapRef.value)
})
</script>
