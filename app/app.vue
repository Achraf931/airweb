<script setup>
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - AirWeb` : 'AirWeb'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>