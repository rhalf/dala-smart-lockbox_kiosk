<template>
  <v-row class="mb-8">
    <v-col v-for="locker in board.lockers" :key="locker.id" cols="3">
      <Locker :item="locker"></Locker>
    </v-col>
  </v-row>
</template>

<script>
import Locker from "./Locker.vue";

export default {
  components: { Locker },
  props: {
    item: Object,
  },
  computed: {
    board: {
      get() {
        return this.item;
      },
    },
  },
};
</script>

<style scoped></style>
