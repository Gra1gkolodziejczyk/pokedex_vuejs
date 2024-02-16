<template>
  <div>
    <input
      class=""
      type="text"
      :placeholder="placeholder"
      :required="req"
      v-model="text"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder?: string
  req?: boolean
}

const {placeholder, req} = defineProps<Props>()

const text = defineModel<string>()
</script>
