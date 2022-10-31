<template>
  <div>
    <v-fade-transition mode="out-in">
      <Stepper></Stepper>
    </v-fade-transition>
  </div>
</template>

<script>
import Stepper from "./components/Stepper";

import { mapActions } from "vuex";

export default {
  name: "CheckInView",
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
