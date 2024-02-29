<template>
  <div>
    <div class="flex justify-center items-center">
      <label for="typeFilter" class="mr-2 text-white text-2xl justify-center flex items-center">Filtrer par type:</label>
        <select class="flex justify-center items-center mt-2" v-model="selectedType" id="typeFilter">
          <option value="">Tous</option>
          <option v-for="type in uniqueTypes" :key="type" :value="type">{{ type }}</option>
        </select>
    </div>
      <div class="flex justify-center text-center flex-wrap items-center m-10">
        <RouterLink
            v-for="(pokemon, index) in filteredPokemons"
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
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const pokemons = ref<Pokemon[]>([]);
const baseUrl: string = `${import.meta.env.VITE_BASE_URL}`;
const selectedType = ref<string | null>(null);

fetch(`${baseUrl}/pokemons`)
  .then((res) => res.json() as Promise<Pokemon[]>)
  .then((data) => {
    pokemons.value = data;
  })
  .catch((e) => {
    console.log(e);
  })

  const uniqueTypes = computed(() => {
  const types: string[] = [];
  pokemons.value.forEach(pokemon => {
    if (!types.includes(pokemon.type)) {
      types.push(pokemon.type);
    }
  });
  return types;
});

const filteredPokemons = computed(() => {
  if (!selectedType.value) {
    return pokemons.value;
  } else {
    return pokemons.value.filter(pokemon => pokemon.type === selectedType.value);
  }
});

</script>
