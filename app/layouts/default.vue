<template>
  <nav class="my-2 flex items-center px-5 mx-auto rounded-full w-full justify-between">
    <NuxtLink to="https://www.airweb.fr/">
      <img class=" top-5 left-5 w-24 p-3 rounded-full shadow-md" src="https://www.airweb.fr/wp-content/uploads/2021/09/logo-crop.svg" alt="Logo AirWeb">
    </NuxtLink>
    <NuxtLink exact-active-class="nuxt-link-exact-active" class="shadow-md rounded-full rounded-full p-3 transition-all duration-100 ease-in-out hover:bg-[color:#0099D1] hover:text-white" to="/">Accueil</NuxtLink>
    <NuxtLink exact-active-class="nuxt-link-exact-active" class="group shadow-md rounded-full rounded-full p-3 transition-all duration-100 ease-in-out hover:bg-[color:#0099D1] hover:text-white" to="/cart">
      <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2h-24z"/></svg>
    </NuxtLink>
  </nav>
  <slot />
</template>

<style>
.nuxt-link-exact-active {
  color: white;
  fill: white;
  background-color: #0099D1;
}
</style>