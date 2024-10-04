<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useCharacterData } from '../src/composables/useCharacterData'; // Gleicher Pfad

const { data, fetchData, getTotalValue } = useCharacterData('Kaya');

onMounted(() => {
    fetchData();
});
</script>

<template>
<div class="container">
   
    <header class="header">

      <div class="name">

        <div class="name-name" v-if="data && data.character">{{ data.character.name }}</div>
        <div class="name-name" v-else></div>

      </div>

      <div class="karma">Radikale Ökoschamanin</div>

    </header>

    <RouterView />

</div>

</template>

<style scoped>

</style>
