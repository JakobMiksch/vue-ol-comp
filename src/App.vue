<script setup lang="ts">
import { useGeographic } from 'ol/proj';
useGeographic()
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

<style scoped>

</style>
