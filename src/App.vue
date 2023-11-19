<script setup lang="ts">
import { useGeographic } from 'ol/proj';
import { onMounted } from 'vue';
import { useOl } from './composables/useOl';
import { View } from 'ol';

useGeographic()

onMounted(() => {
  // init map globally
  useOl().init(new View({ center: [11, 47], zoom: 18 }))
})

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> <br>
        <RouterLink to="/mapA">mapA</RouterLink> <br>
        <RouterLink to="/mapB">mapB</RouterLink> <br>
        <RouterLink to="/mapC">mapC</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
