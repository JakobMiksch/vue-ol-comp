<template>
  <div>
    <h1>map B</h1>
  </div>
  <p>COUNT: {{ count }}</p>
  <button @click="count++">+1</button>


</template>

<script setup lang="ts">

import { useCount } from '@/composables/useCount'

const { count } = useCount()

</script>

<style>

</style>
