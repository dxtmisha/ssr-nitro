<script setup lang="ts">
</script>

<template>
  <div class="app-header">
    Header
    <div class="app-header__menu">
      <a href="/project-a/">project-a</a>
      <a href="/project-b/">project-b</a>
      <a href="/project-nuxt/">project-nuxt</a>
      <a href="/project-nuxt-nitro/">project-nuxt-nitro</a>
      <a href="/project-nuxt-server/">project-nuxt-server</a>
    </div>
  </div>
</template>

<style scoped>
.app-header {
  padding: 16px 24px;
}

.app-header__menu {
  display: flex;
  gap: 16px;
}
</style>
