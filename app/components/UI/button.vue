<script setup>
const props = defineProps({
  border: {
    type: Boolean
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const propsComputed = computed(() => {
  let classList
  classList = props.border ? 'bg-white text-[color:#0099D1] hover:bg-[color:#0099D1] hover:text-white' : 'bg-[color:#0099D1] text-white hover:bg-white hover:text-[color:#0099D1]'
  classList += props.fullWidth ? ' w-full' : ''
  return classList
})
</script>
<template>
  <button :class="propsComputed" class="group text-center rounded-md px-4 py-2 border border-solid border-[color:#0099D1] transition-all duration-100 ease-in-out">
    <slot />
  </button>
</template>