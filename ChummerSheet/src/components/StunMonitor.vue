<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="stun-condition box">

    <div class="stun-dmg">

      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">
      <input type="checkbox" class="favourite">

    </div>

    <div class="lower-header">Geistiger Zustand</div>

  </div>

</template>

<style scoped>

</style>