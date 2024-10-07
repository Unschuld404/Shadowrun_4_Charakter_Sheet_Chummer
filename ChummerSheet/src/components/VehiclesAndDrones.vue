<script setup lang="ts">

</script>

<template>
  <div class="box">
    <div class="name">Drohne</div>
    <div class="info">
      <div class="value">Handling</div>
      <div class="value">Beschl.</div>
      <div class="value">Geschw.</div>
      <div class="value">Pilot</div>
      <div class="value">Rumpf</div>
      <div class="value">Panz.</div>
      <div class="value">Sensor</div>
    </div>
  </div>

  <div class="box">
    <div class="name">Fahrzeug</div>
    <div class="info">
      <div class="value">Handling</div>
      <div class="value">Beschl.</div>
      <div class="value">Geschw.</div>
      <div class="value">Pilot</div>
      <div class="value">Rumpf</div>
      <div class="value">Panz.</div>
      <div class="value">Sensor</div>
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
  width: 10%;
  text-align: center;
  line-height: 9vh;
  font-size: 2vh;
}

</style>/