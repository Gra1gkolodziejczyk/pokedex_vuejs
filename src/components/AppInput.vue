<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :required="req"
      v-model="text"
      class="p-2 w-96 rounded"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder?: string
  req?: boolean
  type: "password" | "email" | "text" | undefined
}

const {placeholder, req, type} = defineProps<Props>()

const text = defineModel<string>()
</script>
