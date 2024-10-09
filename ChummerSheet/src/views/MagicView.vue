<script setup lang="ts">
import Spells from "@/components/Spells.vue";
import Spirits from "@/components/Spirits.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateRight = () => {
  router.push({ name: 'skills' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

</script>

<template>

  <div v-touch:swipe.right="navigateRight">

    <div class="collection">
      <div class="flex-scroll spells">
        <Spells />
      </div>

      <div class="flex-scroll spirits">
        <Spirits />
      </div>
    </div>

  </div>
</template>

<style scoped>

  .collection {
    display: flex;
    gap: 2vh;
  }

  .spells {
    flex: 2;
  }

  .spirits {
    flex: 1;
  }

</style>
