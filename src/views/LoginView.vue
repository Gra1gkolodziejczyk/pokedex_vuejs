<template>
  <div class="mt-32 flex justify-center items-center">
    <div class="bg-green-500 rounded-lg p-8">
      <h1 class="text-white font-bold text-4xl mb-4 text-center">Connexion</h1>
      <div class="mb-4"> 
        <form @submit.prevent="login">
          <div class="mt-3">
            <AppLabelInput title="Email :"></AppLabelInput>
            <AppInput type="email" v-model="email" placeholder="Entrer votre email"></AppInput>
          </div>
          <div class="mt-3">
            <AppLabelInput title="Mot de passe :"></AppLabelInput>
            <AppInput type="password" v-model="password" placeholder="Entrer votre mot de passe"></AppInput>
          </div>
          <div class="mt-5">
            <AppButton  type="submit" text="Se connecter"></AppButton>
          </div>
          <div class="mt-5 flex justify-center items-center">
            <p class="font-thin text-lg text-white">Vous avez déjà un compte ?</p>
            <div class="pl-2">
              <router-link to="/register" class="text-green-700 font-bold text-lg hover:text-green-800">S'enregistrer</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppLabelInput from '@/components/AppLabelInput.vue';

import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const email = ref('');
const password = ref('');

const authStore = useAuthStore();

const login = async () => {
  await authStore.login(email.value, password.value);
};
</script>
