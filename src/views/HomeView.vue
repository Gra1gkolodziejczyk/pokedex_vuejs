<template>
  <div>
      <div class="flex justify-center text-center flex-wrap items-center m-10">
        <RouterLink
            v-for="(pokemon, index) in pokemons" 
            :key="index"
            :to="`/${pokemon._id}`"
          >
          <AppCardPokemon :id="pokemon._id" :url="pokemon.url" :name="pokemon.name" :type="pokemon.type"/>
        </RouterLink>
      </div>
  </div>
</template>

<script setup lang="ts">
import AppCardPokemon from '@/components/AppCardPokemon.vue'
import type { Pokemon } from '@/types/pokemon';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const pokemons = ref<Pokemon[]>([]);
const baseUrl: string = `${import.meta.env.VITE_BASE_URL}`;
fetch(`${baseUrl}/pokemons`)
  .then((res) => res.json() as Promise<Pokemon[]>)
  .then((data) => {
    pokemons.value = data;
  })
  .catch((e) => {
    console.log(e);
  })
</script>
