<template>
  <div>
    project-nuxt
    <div class="n-link">
      <NuxtLink to="/">Main</NuxtLink>
      <NuxtLink to="/sub/">Sub</NuxtLink>
    </div>
    <NuxtPage/>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.n-link {
  display: flex;
  gap: 16px;
}
</style>
