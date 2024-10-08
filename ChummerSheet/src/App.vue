<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import {fetchData} from "@/scripts/Fetch";
import { data } from "@/scripts/Data";

onMounted(() => {
  fetchData();
});

</script>

<template>
   
    <header class="header">

      <div class="name">
        <div v-if="data">{{ data.name }}</div>
      </div>

      <nav class="navbar">
        <ul>

          <li><RouterLink to="vehicles" class="nav-link"><i class='bx bxs-car'></i></RouterLink></li>
          <li><RouterLink to="weapons" class="nav-link"><i class='bx bx-knife'></i></RouterLink></li>
          <li><RouterLink to="main" class="nav-link"><i class='bx bx-street-view'></i></RouterLink></li>
          <li><RouterLink to="skills" class="nav-link"><i class='bx bxs-joystick'></i></RouterLink></li>
          <li><RouterLink to="spells" class="nav-link"><i class='bx bxs-magic-wand'></i></RouterLink></li>
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

.karma {
  width: 30%;
  text-align: right;
}

.navbar {
  width: 30%;
  align-items: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav-link {
  color: var(--font-color)
}

.router-link-active {
  color: var(--accent-color)
}

</style>
