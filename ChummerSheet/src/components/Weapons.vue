<script setup lang="ts">

</script>

<template>

  <div class="box">
    <div class="name">Beispielwaffe</div>
    <div class="info">
      <input type="checkbox" class="favourite">
      <div class="value">Reichweite</div>
      <div class="value">Schaden</div>
      <div class="value">PB</div>
      <button class="total-value">00</button>
    </div>
  </div>

  <div class="box">
    <div class="name">Beispielschusswaffe</div>
    <div class="info">
      <input type="checkbox" class="favourite">
      <div class="value">Schaden</div>
      <div class="value">PB</div>
      <div class="value">Modus</div>
      <div class="value">Rückstoß</div>
      <div class="value">Munition</div>
      <button class="total-value">00</button>
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
  text-align: center;
  margin-top: 3vh;
  height:8vh;
}

.total-value {
  height: 6vh;
  width: 6vh;
  margin-top: -2vh;
}

.value {
  width: 10%;
}

</style>/