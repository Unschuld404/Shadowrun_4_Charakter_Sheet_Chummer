<script setup lang="ts">
import Weapons from "@/components/Weapons.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateLeft = () => {
  router.push({ name: 'main' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

const navigateRight = () => {
  router.push({ name: 'vehicles' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

</script>

<template>

  <div v-touch:swipe.left="navigateLeft"
       v-touch:swipe.right="navigateRight">

    <div class="collection">
      <div class="flex-scroll">
        <Weapons/>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
