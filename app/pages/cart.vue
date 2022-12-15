<script setup>
import { useProducts } from "../stores/products";

const store = useProducts()
const products = computed(() => {
  return store.getProductsFromCart
})
const totalCart = computed(() => {
  return store.getSum
})
useHead({
  title: 'Panier',
})
</script>

<template>
  <section class="px-5 pb-5 flex">
    <template v-if="products.length">
      <div class="flex flex-col w-2/3 pb-5 pr-5 gap-5 max-h-[85vh] h-full snap-mandatory snap-y overflow-y-scroll">
        <article v-for="(product, index) in products" :key="index" class="shadow-md flex rounded-md snap-start bg-white">
          <img class="aspect-square w-24 rounded-l-md" :src="product.thumbnail_url" :alt="`Image ${product.label}`">
          <div class="p-2 gap-4">
            <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }" class="font-bold transition-all duration-100 ease-in-out hover:text-[color:#0099D1]">{{ product.label }}</NuxtLink>
            <p class="text-xs text-ellipsis overflow-hidden ...">{{ product.description }}</p>
            <p class="font-semibold text-xs">{{ product.price }}€</p>
          </div>
        </article>
      </div>
      <div class="w-1/3 shadow-md p-5 self-baseline bg-white rounded-md">
        <h1 class="font-bold text-2xl">Votre panier</h1>
        <div class="my-5">
          <p class="text-xs">Livraison gratuite</p>
        </div>
        <NuxtLink to="/checkout">
          <UIButton full-width>Payer {{ totalCart }}€</UIButton>
        </NuxtLink>
        <UIButton @click="store.resetCart" full-width border class="mt-2">Vider le panier</UIButton>
      </div>
    </template>
    <p class="font-bold text-xl text-center p-5" v-else>Votre panier est vide !</p>
  </section>
</template>