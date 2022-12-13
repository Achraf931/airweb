<script setup>
import {useProducts} from "../stores/products";

const store = useProducts()

const totalCart = computed(() => {
  return store.getSum
})
</script>
<template>
  <section class="p-5">
    <h2 class="font-bold text-xl">Contact</h2>
    <UIInput type="email" placeholder="Email" />
    <div class="mt-10">
      <h2 class="font-bold text-xl">Livraison</h2>
      <div class="flex gap-5">
        <UIInput type="text" placeholder="Nom" />
        <UIInput type="text" placeholder="Prénom" />
      </div>
      <UIInput type="text" placeholder="Entreprise (optionnel)" />
      <UIInput type="text" placeholder="Adresse" />
      <UIInput type="text" placeholder="Appartement, suite, etc (optionnel)" />
      <UIInput type="text" placeholder="Ville" />
      <div class="flex gap-5">
        <UIInput type="text" placeholder="Pays" />
        <UIInput type="text" placeholder="Code postal" />
      </div>
      <UIInput type="number" placeholder="Portable (optionnel)" />
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
  </section>
</template>