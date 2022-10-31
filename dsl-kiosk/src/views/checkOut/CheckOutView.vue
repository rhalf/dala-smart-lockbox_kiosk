<template>
  <v-fade-transition mode="out-in">
    <Stepper></Stepper>
  </v-fade-transition>
</template>

<script>
import Stepper from "./components/Stepper";

import { mapActions } from "vuex";

export default {
  name: "CheckOutView",
  components: { Stepper },
  methods: {
    ...mapActions("order", ["setOrder"]),
    ...mapActions("locker", ["setLocker", "setLockerPassed"]),
  },
  mounted() {
    this.setOrder(null);
    this.setLocker(null);
    this.setLockerPassed(false);
  },
};
</script>

<style scoped></style>
