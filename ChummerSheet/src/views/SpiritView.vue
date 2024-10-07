<script setup lang="ts">
  import Spirits from "@/components/Spirits.vue";
</script>

<template>
  <div class="collection">
    <div class="flex-scroll">
      <Spirits />
    </div>
    <div class="add">+</div>
  </div>
</template>

<style scoped>

.add {
  margin-top: 2vh;
}

</style>
