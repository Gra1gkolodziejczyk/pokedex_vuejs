<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  _id: String,
  url: String,
  name: String,
  type: String,
});

const getBorderColor = (type?: string) => {
  let baseClass = 'rounded-full w-96 h-96 overflow-hidden border-4'
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

const getTextNameColor = (type?: string) => {
  let baseClass = 'text-4xl font-bold mb-10 mt-10'
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

const getBackgroundColor = (type?: string) => {
  let baseClass = 'text-white font-bold rounded-md text-lg px-3 py-1'
  switch (type) {
    case 'fire':
      baseClass += ' bg-red-500 hover:bg-red-600';
      break;
    case 'water':
      baseClass += ' bg-blue-500 hover:bg-blue-600';
      break;
    case 'plant':
      baseClass += ' bg-green-500 hover:bg-green-600';
      break;
    case 'vol':
      baseClass += ' bg-blue-400 hover:bg-blue-500';
      break;
    case 'vol | normal':
      baseClass += ' bg-blue-300 hover:bg-blue-400';
      break;
    case 'normal | vol':
      baseClass += ' bg-blue-300 hover:bg-blue-400';
      break;
    case 'insect | vol':
      baseClass += ' bg-yellow-500 hover:bg-yellow-600';
      break;
    case 'insect | poison':
      baseClass += ' bg-purple-500 hover:bg-purple-600';
      break;
    case 'insect':
      baseClass += ' bg-green-200 hover:bg-green-300';
      break;
    case 'normal':
      baseClass += ' bg-gray-500 hover:bg-gray-600';
      break;
    default:
      baseClass += 'border-white';
      break;
    }
    return baseClass
};

const router = useRouter();

function goBack() {
  router.go(-1);
}

</script>

<template>
  <div class="flex flex-col items-center text-center mt-20">
    <div class="absolute top-0 mt-20 left-0 ml-9">
      <button @click="goBack" :class="getBackgroundColor(props.type)">
        Retour
      </button>
    </div>
    <div :class="getBorderColor(props.type)">
      <img :src="props.url" :alt="props.name" class="w-full h-full object-cover"/>
    </div>
    <h3 :class="getTextNameColor(props.type)" class="text-4xl font-bold mt-4">{{ props.name }}</h3>
    <div class="flex flex-row items-center mt-2">
      <h3 class="text-white font-semibold mr-2">Type :</h3>
      <h3 :class="getTextColor(props.type)">{{ props.type }}</h3>
    </div>
  </div>
</template>