<template>
  <div>
    <router-link :link="link">
      <button :type="type">
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string,
  type: "button" | "submit" | "reset" | undefined,
  link: string,
}
const {text, type, link} = defineProps<Props>();
</script>
