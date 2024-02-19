<script setup lang="ts">
interface Props {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
}
const {text, type} = defineProps<Props>();
</script>

<template>
  <div class="flex justify-center items-center">
    <button 
      class="text-white text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center" 
      :type="type"
    >
      {{ text }}
    </button>
  </div>
</template>

<style scoped></style>