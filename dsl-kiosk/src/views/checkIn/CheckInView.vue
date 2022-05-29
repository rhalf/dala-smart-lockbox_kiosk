<template>
  <div>
    <v-fade-transition mode="out-in">
      <rider-sign-in v-if="!rider"></rider-sign-in>
      <check-in-stepper v-if="rider"></check-in-stepper>
    </v-fade-transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CheckInStepper from "./CheckInStepper";
import RiderSignIn from "../../components/rider/RiderSignIn";

export default {
  name: "CheckInView",
  components: { RiderSignIn, CheckInStepper },
  computed: {
    ...mapGetters("rider", ["rider"]),
  },
};
</script>

<style scoped></style>
