<script setup lang="ts">

import { useRollDialogue } from "@/scripts/Dialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="box">

    <div class="scroll-box">

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value" @click="openModal">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value" @click="openModal">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value" @click="openModal">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value" @click="openModal">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value" @click="openModal">00</button>
        </div>
      </div>

      <div class="item">
       <div>Lieblingsfertigkeit</div>
        <div class="value">Wert + Attr.</div>
        <div class="button-box">
          <button class="total-value">00</button>
        </div>
      </div>

    </div>

    <div class="lower-header">Fertigkeiten</div>

  </div>

  <!-- Dialogue for Dice Rolls -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <div class="dice-roll">
        <div class="boost">EDGE</div>
        <div class="dice-pool">00</div>
        <div class="modify">
          <i class='bx bx-chevron-up mod'></i>
          <i class='bx bx-chevron-down mod' ></i>
        </div>
      </div>
      <button class="confirm" @click="closeModal">OK</button>
    </div>
  </div>

</template>

<style scoped>

  .box {
    height: 100%;
  }

  .value {
    width: 30%;
  }

  .button-box {
    width: 10%
  }

</style>