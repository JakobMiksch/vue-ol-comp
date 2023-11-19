<template>
  <div ref="olMapRef" />
</template>

<script setup lang="ts">
import { useOl } from '@/composables/useOl'
import { onMounted, ref } from 'vue'

// TODO: does it work with permalink?

const { map } = useOl()

// TODO: add type
const olMapRef = ref()

onMounted(() => {
  map.value?.setTarget(olMapRef.value)
})
</script>
