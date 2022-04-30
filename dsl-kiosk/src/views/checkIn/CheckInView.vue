<template>
  <v-fade-transition mode="out-in">
    <rider-sign-in
      @onRiderSignIn="onRiderSignInHandler"
      v-if="!getRider()"
      :enable="true"
    >
    </rider-sign-in>

    <check-in-stepper
      v-if="getRider()"
      :courier="getRider()"
    ></check-in-stepper>
  </v-fade-transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CheckInStepper from "./CheckInStepper";
import RiderSignIn from "../../components/rider/RiderSignIn";

export default {
  name: "CheckInView",
  components: { RiderSignIn, CheckInStepper },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["setRider"]),
    ...mapGetters(["getRider"]),

    onRiderSignInHandler(data) {
      console.log(data);
      this.setRider(data);
    },
  },
};
</script>

<style scoped></style>
