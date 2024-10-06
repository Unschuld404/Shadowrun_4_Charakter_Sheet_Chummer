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

        <div class="name-name">Kaya</div>

      </div>

      <nav class="navbar">
        <ul>

          <li><RouterLink to="vehicles" class="nav-link"><span class="material-symbols-outlined">
          smart_toy
          </span></RouterLink></li>
          <li><RouterLink to="weapons" class="nav-link"><span class="material-symbols-outlined">
          swords
          </span></RouterLink></li>
          <li><RouterLink to="main" class="nav-link"><i class='bx bxs-home'></i></RouterLink></li>
          <li><RouterLink to="skills" class="nav-link"><i class='bx bxs-joystick'></i></RouterLink></li>
          <li><RouterLink to="spells" class="nav-link"><i class='bx bxs-magic-wand'></i></RouterLink></li>
          <li><RouterLink to="spirits" class="nav-link"><i class='bx bxs-ghost' ></i></RouterLink></li>

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
      width: 30%;
      }

.navbar {
  width: 30%;
  align-items: center;
}

.karma {
  width: 30%;
  text-align: right;
}

.navbar ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

i:hover, span:hover {
  color: var(--accent-color);
}

.nav-link {
  color: var(--font-color)
}

.router-link-active {
  color: var(--accent-color)
}

span {
  font-size: 4vh;
}

</style>
