<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      multiverseid: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    v-if="props.character.multiverseid"
    :to="`/cards/${props.character.multiverseid}`"
    class="rounded-lg bg-white shadow-lg "
  >
    <img
      class="w-40 rounded-t-lg object-cover ml-auto mt-2 mr-auto hover:w-full hover:mt-0 transition-all"
      :src="props.character.imageUrl"
    />
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-black">
        {{ props.character.name }}
      </h2>
    </div>
  </RouterLink>
</template>
