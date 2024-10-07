<script setup lang="ts">
import ActionSkills from "@/components/ActionSkills.vue";
import KnowledgeSkills from "@/components/KnowledgeSkills.vue";
</script>


<template>
  <div class="collection">
    <ActionSkills />
    <KnowledgeSkills />
  </div>

</template>

<style scoped>

.collection {
  display: flex;
  gap: 2vh;
}

.box {
  width: 100%;
  padding-left: 2vh;
  padding-right: 2vh;
}

</style>
