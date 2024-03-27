<script setup lang="ts">
const {data} = await useAsyncData<{ data: { title: string, date: string, description: string, code: string } }>(
    'vukhtantu',
    () => $fetch('https://symfony.f56go.com/vukhtantu/description')
)

const title = computed(() => data.value && data.value.data.title)
const date = computed(() => data.value && data.value.data.date)
const description = computed(() => data.value && data.value.data.description)
const code = computed(() => data.value && data.value.data.code)

useHead({
  title: title.value,
  meta: [{name: 'description', content: description}],
})
</script>

<template>
  <div class="v-description__return">
    <NuxtLink to="/">return</NuxtLink>
  </div>
  <div v-if="data">
    <h1>{{ title }}</h1>
    <div v-html="date"></div>
    <div v-html="code"></div>
  </div>
</template>

<style scoped>
.v-description__return {
  padding-bottom: 16px;
}
</style>
