<template>
  <div>
    <v-fade-transition mode="out-in">
      <!-- <rider-sign-in v-if="!rider"></rider-sign-in> -->
      <check-in-stepper></check-in-stepper>
    </v-fade-transition>
  </div>
</template>

<script>
import CheckInStepper from "./CheckInStepper";

export default {
  name: "CheckInView",
  components: { CheckInStepper },
};
</script>

<style scoped></style>
