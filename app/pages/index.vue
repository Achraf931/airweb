<script setup>
import {useProducts} from "../stores/products";
const store = useProducts()

onMounted(async () => await store.getProducts())

const products = computed(() => store.showProducts)
</script>
<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
  </section>
</template>