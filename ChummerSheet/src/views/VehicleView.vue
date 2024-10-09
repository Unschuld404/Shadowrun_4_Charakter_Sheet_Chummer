<script setup lang="ts">
import VehiclesAndDrones from "@/components/VehiclesAndDrones.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateLeft = () => {
  router.push({ name: 'weapons' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

</script>

<template>

  <div v-touch:swipe.left="navigateLeft">

    <div class="collection">
      <div class="flex-scroll">
        <VehiclesAndDrones/>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
