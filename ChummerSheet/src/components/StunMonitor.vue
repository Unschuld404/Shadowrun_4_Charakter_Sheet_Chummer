<script setup lang="ts">

</script>

<template>

  <div class="box">
    <div class="dmg">
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

  .box {
    height: 36vh;
    width: 50%;
  }

  .dmg {
    display: flex;
    flex-wrap: wrap;
    gap: 1vh;
    justify-content: space-evenly;
    padding-top: 1vh;
    padding-left: 4vh;
    padding-right: 4vh;
  }

  .favourite {
    height: 4vh;
    width: 4vh;
  }

</style>