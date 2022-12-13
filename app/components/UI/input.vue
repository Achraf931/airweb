<script setup>
const props = defineProps({
  placeholder: {
    type: String
  },
  type: {
    type: String,
    default: 'text',
    required: true
  }
})
</script>
<template>
  <input :type="type" :placeholder="placeholder" class="bg-slate-100 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
</template>