<script setup lang="ts">
import Spells from "@/components/Spells.vue";
import Spirits from "@/components/Spirits.vue";

</script>

<template>
  <div class="collection">
    <div class="flex-scroll spells">
      <Spells />
    </div>

    <div class="flex-scroll spirits">
      <Spirits />
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
