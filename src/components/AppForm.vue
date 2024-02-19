<template>
  <div>
    <form class="" :onsubmit="validateAndEmit">
      <div class="">
        <AppInput v-model="email" :req="true" placeholder="Entrer votre email"></AppInput>
      </div>
      <div class="">
        <AppInput v-model="password" :req="true" placeholder="Entrer votre mot de passe"></AppInput>
      </div>
      <div class="">
        <AppButton text="Login" type="submit"></AppButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';

const email = ref('');
const password = ref('');

type Emit = {
  error: [message: string];
}

const emit = defineEmits<Emit>();
function validateAndEmit(event: SubmitEvent) {
  event.preventDefault();
}
</script>
