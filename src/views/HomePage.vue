<script setup>
import { onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import useCharacters from '@/composables/useCharacters'

const { characters, fetchCharacters, firstLoad } = useCharacters()

onMounted(async () => {
  if (firstLoad.value) {
    await fetchCharacters()

    firstLoad.value = false
  }
})
</script>

<template>
  <button
    title="Load Characters"
    class="z-90 fixed bottom-8 right-8 flex h-10 w-40 items-center justify-center rounded-lg bg-black text-md text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchCharacters"
  >
    Load Characters
  </button>
  <main class="min-h-screen bg-black ">
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard
        v-for="character in characters"
        :key="character._id"
        :character="character"
      />
    </div>
  </main>
</template>
