<script setup>
import {useProducts} from "../stores/products";

const store = useProducts()

const totalCart = computed(() => {
  return store.getSum
})
</script>
<template>
  <section class="flex-1 flex items-center justify-center">
    <form class="p-5 max-w-4xl mx-auto shadow-md rounded-md bg-white">
      <h2 class="font-bold text-xl">Contact</h2>
      <div class="flex gap-5">
        <UIInput type="email" placeholder="Email" />
        <UIInput type="number" placeholder="Portable (optionnel)" />
      </div>
      <div class="mt-10">
        <h2 class="font-bold text-xl">Livraison</h2>
        <div class="flex gap-5">
          <UIInput type="text" placeholder="Nom" />
          <UIInput type="text" placeholder="Prénom" />
        </div>
        <UIInput type="text" placeholder="Entreprise (optionnel)" />
        <div class="flex gap-5">
          <UIInput type="text" placeholder="Adresse" />
          <UIInput type="text" placeholder="Ville" />
        </div>
        <div class="flex gap-5">
          <UIInput type="text" placeholder="Pays" />
          <UIInput type="text" placeholder="Code postal" />
        </div>
      </div>
      <div class="mt-10">
        <h2 class="font-bold text-xl">Paiement</h2>
        <div class="flex gap-2">
          <UIInput type="number" min="16" max="16" placeholder="4972 6453 7192 9183" />
          <UIInput type="text" min="4" max="4" placeholder="11/25" />
          <UIInput type="text" min="3" max="3" placeholder="CGV" />
        </div>
      </div>
      <div class="flex gap-5">
        <UIButton class="mt-10">Payer {{ totalCart }}€</UIButton>
        <UIButton class="mt-10 !bg-white border-0 shadow-md w-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png" alt="G-pay logo">
        </UIButton>
        <UIButton class="mt-10 !bg-white border-0 shadow-md w-24">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png" alt="G-pay logo">
        </UIButton>
      </div>
    </form>
  </section>
</template>