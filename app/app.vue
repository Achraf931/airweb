<script setup>
const { data } = await useFetch('http://localhost:3000/products')
console.log(data.value)
</script>
<template>
  <div>
    <p class="te">Bonjour les enfants</p>
  </div>
</template>
