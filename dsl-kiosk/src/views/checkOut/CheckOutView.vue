<template>
  <v-fade-transition mode="out-in">
    <check-out-stepper></check-out-stepper>
  </v-fade-transition>
</template>

<script>
import CheckOutStepper from "../checkOut/CheckOutStepper";

export default {
  name: "CheckOutView",
  components: { CheckOutStepper },
};
</script>

<style scoped></style>
