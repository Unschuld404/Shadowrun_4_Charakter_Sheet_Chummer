<script setup lang="ts">
import { computed } from 'vue';
import { data, getSkills } from '@/scripts/Data';
import { useRollDialogue } from "@/scripts/Dialogue";

// Computed Property, das sich automatisch aktualisiert, wenn data sich ändert
const knowledgeSkills = computed(() => {
  return data.value ? getSkills(true) : [];
});

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="knowledge-skills box">
    <div class="scroll-box">
      <div v-if="knowledgeSkills.length">
        <ul>
          <li v-for="(skill, index) in knowledgeSkills" :key="index" class="item">
            <div class="checkbox-box">
              <input type="checkbox" class="favourite">
            </div>
            <div v-if="data">{{ skill.name }}</div>
            <div class="value" v-if="data"><strong>{{ skill.rating }}</strong> + {{ skill.attribute }} {{ skill.attributemod }}</div>
            <div class="button-box">
              <button v-if="data" class="total-value" @click="openModal">{{ skill.total }}</button>
            </div>
          </li>
        </ul>
      </div>
      <p v-else>No knowledge skills available.</p>
    </div>
    <div class="lower-header">Wissensfertigkeiten</div>

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
  </div>

</template>

<style scoped>

</style>