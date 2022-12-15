<script setup>
import {useProducts} from "../../stores/products";

const store = useProducts()

const props = defineProps({
  product: {
    type: Object
  }
})
</script>
<template>
  <article class="shadow-md p-4 flex flex-col bg-white">
    <img class="rounded-md w-full object-cover aspect-video" :src="props.product.thumbnail_url" :alt="`Image ${props.product.label}`">
    <div class="flex items-baseline justify-between gap-2">
      <h2 class="my-2 text-xs font-bold w-2/3">{{ props.product.label }}</h2>
      <p class="text-xs w-1/3 text-end font-bold text-[color:#0099D1]">{{ props.product.price }}€</p>
    </div>
    <p class="text-xs">{{ props.product.description }}</p>
    <div class="flex mt-auto gap-4 pt-2">
      <NuxtLink :to="{ name: 'products-id' , params: { id: props.product.id }}">
        <UIButton border>Voir</UIButton>
      </NuxtLink>
      <UIButton @click="store.addProductInCart(props.product)">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-white group-hover:fill-[color:#0099D1]" width="24" height="24" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm-.299 8.76c0-1.29.38-2.489 1.028-3.5h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-3.454-.152-6.21-2.993-6.21-6.485zm-2.299-8.76c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>
      </UIButton>
    </div>
  </article>
</template>