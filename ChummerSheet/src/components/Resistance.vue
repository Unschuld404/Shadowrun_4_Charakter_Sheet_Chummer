<script setup lang="ts">

</script>

<template>

  <div class="box">

    <div class="resistances">

      <div class="resistance">
        <div class="resistance-category">Ballist.</div>
        <button class="total-value" @click="openModal">6</button>
      </div>

      <div class="resistance">
        <div class="resistance-category">Stoß</div>
        <button class="total-value" @click="openModal">8</button>
      </div>

      <div class="resistance">
        <div class="resistance-category">Körperl.</div>
        <button class="total-value" @click="openModal">4</button>
      </div>

      <div class="resistance">
        <div class="resistance-category">Wille</div>
        <button class="total-value" @click="openModal">6</button>
      </div>

      <div class="resistance">
        <div class="resistance-category">Entzug</div>
        <button class="total-value" @click="openModal">6</button>
      </div>

    </div>

    <div class="lower-header">Widerstand</div>

  </div>

</template>

<style scoped>

  .resistances {
    display: flex;
    margin-top: 0.5vh;
  }

  .resistance {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }

  .box {
    height: 12vh;
  }

</style>