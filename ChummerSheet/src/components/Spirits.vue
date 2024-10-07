<script setup lang="ts">

</script>

<template>

  <div class="box">
    <div class="name">Beispielgeist</div>
    <div class="info">
      <div class="value">Kraft</div>
      <div class="value">Dienste</div>
      <div class="value">gebunden</div>
    </div>
  </div>

  <div class="box">
    <div class="name">Beispielgeist</div>
    <div class="info">
      <div class="value">Kraft</div>
      <div class="value">Dienste</div>
      <div class="value">gebunden</div>
    </div>
  </div>

  <div class="box">
    <div class="name">Beispielgeist</div>
    <div class="info">
      <div class="value">Kraft</div>
      <div class="value">Dienste</div>
      <div class="value">gebunden</div>
    </div>
  </div>

</template>

<style scoped>

  .box {
    height: 15vh;
    padding-top: 2vh;
    padding-left: 4vh;
    padding-right: 4vh;
  }

  .name {
    height: 5vh;
    font-size: 3vh;
    font-weight: bold;
    color: var(--accent-color);
    border-bottom: 1px solid var(--font-color);
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .value {
    width: 30%;
    text-align: center;
    line-height: 9vh;
  }

</style>/