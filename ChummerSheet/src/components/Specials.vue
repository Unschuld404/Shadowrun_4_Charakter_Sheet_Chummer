<script setup lang="ts">

</script>

<template>

  <div class="box">

    <div class="item">
      <div class="name">Kampfzauber</div>
      <div class="value">+ 2</div>
      <div class="button-box">
        <button class="total-value">11</button>
      </div>
    </div>

    <div class="item">
      <div class="name">Tiergeister beschwören</div>
      <div class="value">+ 2</div>
      <div class="button-box">
        <button class="total-value">11</button>
      </div>
    </div>

    <div class="item">
      <div class="name">Etwas anderes besonderes ...</div>
      <div class="value">+ 4</div>
      <div class="button-box">
        <button class="total-value">9</button>
      </div>
    </div>

    <div class="lower-header">Boni</div>

  </div>

</template>

<style scoped>

  .name {
    width: 80%;
  }

  .value {
    width: 10%;
  }

  .button-box {
    width: 10%
  }

  .box {
    height: 22vh;
  }

</style>