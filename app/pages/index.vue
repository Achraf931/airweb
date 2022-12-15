<script setup>
import {useProducts} from "../stores/products";
const store = useProducts()

store.getProducts()

const products = computed(() => store.showProducts)

useHead({
  title: 'Accueil',
})
</script>
<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 pb-5">
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
  </section>
</template>