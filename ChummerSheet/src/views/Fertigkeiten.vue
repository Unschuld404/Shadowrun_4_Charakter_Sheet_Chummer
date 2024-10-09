<script setup lang="ts">
import ActionSkills from "@/components/ActionSkills.vue";
import KnowledgeSkills from "@/components/KnowledgeSkills.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateLeft = () => {
  router.push({ name: 'magic' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

const navigateRight = () => {
  router.push({ name: 'main' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

</script>


<template>

  <div v-touch:swipe.left="navigateLeft"
       v-touch:swipe.right="navigateRight">

    <div class="collection">
      <ActionSkills />
      <KnowledgeSkills />
    </div>

  </div>

</template>

<style scoped>

  .collection {
    display: flex;
    gap: 1vh;
  }

  .box {
    width: 100%;
  }

</style>
