<script setup lang="ts">
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
