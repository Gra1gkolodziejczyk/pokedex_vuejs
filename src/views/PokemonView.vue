<template>
  <div>
    <AppPokemonIdTemplate :name="pokemon?.name" :url="pokemon?.url" :type="pokemon?.type" />
  </div>
</template>

<script setup lang="ts">
import AppPokemonIdTemplate from '@/components/AppPokemonIdTemplate.vue';
import type { Pokemon } from '@/types/pokemon';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const baseUrl: string = `${import.meta.env.VITE_BASE_URL}`;

const route = useRoute();

const pokemon = ref<Pokemon>();
fetch(`${baseUrl}/pokemons/${route.params.idPokemon}`)
  .then((res) => res.json() as Promise<Pokemon>)
  .then((data) => {
    pokemon.value = data;
  })
  .catch((e) => {
    console.log(e);
  })
</script>
