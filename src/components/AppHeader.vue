<template>
  <nav class="flex items-center justify-between p-4">
    <div class="mr-5 text-center flex flex-row">
      <img class="mr-3" src="../assets/logo.svg" alt="" width="35" height="35" />
      <h1 class="font-bold text-2xl text-white">Pokedex Vuejs</h1>
      <img class="ml-1" src="../assets/pokeball.png" alt="" width="55" height="35" />
    </div>
    <div>
      <button v-on:click="logout" class="text-white" >Se déconnecter</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';


const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
} 
</script>
