<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  _id: String,
  url: String,
  name: String,
  type: String,
});

const getBorderColor = (type?: string) => {
  let baseClass = 'rounded-lg p-1 border-4'
  switch (type) {
    case 'fire':
      baseClass += ' border-red-500';
      break;
    case 'water':
      baseClass += ' border-blue-500';
      break;
    case 'plant':
      baseClass += ' border-green-500';
      break;
    case 'vol':
      baseClass += ' border-green-500';
      break;
    case 'vol | normal':
      baseClass += ' border-blue-300';
      break;
    case 'normal | vol':
      baseClass += ' border-blue-300';
      break;
    case 'insect | vol':
      baseClass += ' border-yellow-500';
      break;
    case 'insect | poison':
      baseClass += ' border-purple-500';
      break;
    case 'insect':
      baseClass += ' border-green-200';
      break;
    case 'normal':
      baseClass += ' border-gray-500';
      break;
    default:
      baseClass += 'border-white';
      break;
    }
    return baseClass
};

const getTextColor = (type?: string) => {
  let baseClass = 'font-semibold'
  switch (type) {
    case 'fire':
      baseClass += ' text-red-600';
      break;
    case 'water':
      baseClass += ' text-blue-600';
      break;
    case 'plant':
      baseClass += ' text-green-600';
      break;
    case 'vol':
      baseClass += ' text-green-600';
      break;
    case 'vol | normal':
      baseClass += ' text-blue-400';
      break;
    case 'normal | vol':
      baseClass += ' text-blue-400';
      break;
    case 'insect | vol':
      baseClass += ' text-yellow-600';
      break;
    case 'insect | poison':
      baseClass += ' text-purple-600';
      break;
    case 'insect':
      baseClass += ' text-green-400';
      break;
    case 'normal':
      baseClass += ' text-gray-600';
      break;
    default:
      baseClass += 'text-black';
      break;
    }
    return baseClass
};
</script>

<template>
  <div class="p-3">
    <div :class="getBorderColor(props.type)">
      <div class="max-w-xs bg-white overflow-hidden">
        <img class="w-full h-72 object-cover" :src="props.url" alt="pokemon" />
        <div class="pt-4 pr-4 pl-4">
          <h3 class="text-gray-900 font-semibold">{{ props.name }}</h3>
        </div>
        <div class="pt-2 pb-1 flex flex-row text-center justify-center">
          <h3 class="font-semibold mr-2">type: </h3>
          <h3 :class="getTextColor(props.type)">{{ props.type }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>