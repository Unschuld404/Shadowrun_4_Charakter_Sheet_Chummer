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
   
    <header class="header">

      <div class="name">

        <div class="name-name" v-if="data && data.character">{{ data.character.name }}</div>
        <div class="name-name" v-else></div>

      </div>

      <nav class="navbar">
        <ul>
          <li><i class='bx bxs-extension'></i></li>
          <li><i class='bx bxs-joystick'></i></li>
          <li><i class='bx bxs-hot'></i></li>
          <li><i class='bx bxs-magic-wand'></i></li>
          <li><i class='bx bxs-ghost' ></i></li>
        </ul>
      </nav>

      <div class="karma">4 Karma</div>

    </header>

    <RouterView />

</template>

<style scoped>

.header {
  background-color: var(--background-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 4vh;
      }

.name {
      font-weight: bold;
      display: flex;
      }

.navbar {
  width: 80%;
}

.navbar ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 25vw;
  justify-content: space-around;
}

i:hover {
  color: var(--accent-color);
}

</style>
