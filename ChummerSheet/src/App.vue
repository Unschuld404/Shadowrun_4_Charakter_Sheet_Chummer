<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container">
   
    <header class="header">

      <div class="name">

        <div class="name-icon"><img src="/public/SR_Symbol.png" alt="SR_Icon"></div>

        <div class="name-name">Kaya</div>

      </div>

      <div class="karma">Radikale Ökoschamanin</div>

    </header>

    <RouterView />

</div>

</template>

<style scoped>

</style>
