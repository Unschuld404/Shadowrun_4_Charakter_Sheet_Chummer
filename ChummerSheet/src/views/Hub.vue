<script setup lang="ts">
import Edge from "@/components/Edge.vue";
import Initiative from "@/components/Initiative.vue";
import MainActions from "@/components/FavouriteActions.vue";
import MainSkills from "@/components/FavouriteSkills.vue";
import Nuyen from "@/components/Nuyen.vue";
import PhysicalMonitor from "@/components/PhysicalMonitor.vue";
import Resistance from "@/components/Resistance.vue";
import StunMonitor from "@/components/StunMonitor.vue";
import Specials from "@/components/Specials.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateLeft = () => {
  router.push({ name: 'skills' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

const navigateRight = () => {
  router.push({ name: 'weapons' }); // Ersetze 'ZielRouteName' mit dem Namen der Route, zu der du navigieren möchtest
};

</script>

<template>

  <div v-touch:swipe.left="navigateLeft"
       v-touch:swipe.right="navigateRight">

    <div class="collection">

      <div class="column">

        <div class="row">
          <Nuyen/>
          <Edge/>
          <Initiative/>
        </div>

        <Resistance/>

        <Specials/>

        <div class="row">
          <PhysicalMonitor/>
          <StunMonitor/>
        </div>

      </div>

      <div class="column">
        <MainSkills/>
      </div>

      <div class="column">
        <MainActions/>
      </div>

    </div>

  </div>

</template>

<style scoped>

  .collection {
    display: flex;
    gap: 1vh;
  }
  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1vh;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    gap: 1vh;
  }

</style>
