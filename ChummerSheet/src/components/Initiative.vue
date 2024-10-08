<script setup lang="ts">

import { data, getTotalValueByName } from '@/scripts/Data';

</script>

<template>

  <div class="box">

    <div class="initiatives">

      <div class="initiative">
        <div class="initiative-category">Normal</div>
        <button class="total-value" v-if="data">{{ +getTotalValueByName('INT') + +getTotalValueByName('REA') }}</button>
      </div>

      <div class="initiative">
        <div class="initiative-category">Matrix</div>
        <button class="total-value">6</button> <!-- hier ist es vom Kommlink abhängig -->
      </div>

      <div class="initiative">
        <div class="initiative-category">Astral</div>
        <button class="total-value" v-if="data">{{ getTotalValueByName('INT')*2 }}</button>
      </div>

    </div>

    <div class="lower-header">Initiative</div>

  </div>

</template>

<style scoped>

.initiatives {
  display: flex;
  margin-top: 0.5vh;
  justify-content: space-evenly;
}

.initiative {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.box {
  height: 12vh;
  width: 25vh;
}

</style>