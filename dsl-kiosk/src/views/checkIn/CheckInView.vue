<template>
  <div>
    <v-fade-transition mode="out-in">
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
