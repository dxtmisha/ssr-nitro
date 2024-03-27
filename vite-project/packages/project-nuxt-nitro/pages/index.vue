<script setup lang="ts">
const {data} = await useAsyncData<{ data: { title: string, description: string, code: string } }>(
    'vukhtantu',
    () => $fetch('https://symfony.f56go.com/vukhtantu')
)

const title = computed(() => data.value && data.value.data.title)
const description = computed(() => data.value && data.value.data.description)
const code = computed(() => data.value && data.value.data.code)

useHead({
  title,
  meta: [{name: 'description', content: description}],
})
</script>

<template>
  <div v-if="data">
    <h1>{{ title }}</h1>
    <div v-html="code"></div>
  </div>
  <NuxtLink to="/description">description</NuxtLink>
</template>

<style lang="scss"></style>
