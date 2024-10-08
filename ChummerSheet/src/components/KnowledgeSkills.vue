<script setup lang="ts">
import { computed } from 'vue';
import { data, getSkills } from '@/scripts/Data';

// Computed Property, das sich automatisch aktualisiert, wenn data sich ändert
const knowledgeSkills = computed(() => {
  return data.value ? getSkills(true) : [];
});
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
            <div class="name">{{ skill.name }}</div>
            <div class="value"><strong>{{ skill.rating }}</strong> + {{ skill.attribute }} {{ skill.attributeValue }}</div>
            <div class="button-box">
              <button class="total-value">{{ skill.totalValue }}</button>
            </div>
          </li>
        </ul>
      </div>
      <p v-else>No knowledge skills available.</p>
    </div>
    <div class="lower-header">Aktionsfertigkeiten</div>
  </div>

</template>

<style scoped>

.item {
  justify-content: space-between;
}

.name {
  width: 50%;
  font-weight: bold;
  color: var(--accent-color);
}

</style>