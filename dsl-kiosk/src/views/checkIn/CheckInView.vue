<template>
  <div>
    <!-- <v-col>
        <v-slide-x-reverse-transition mode="out-in">
          <router-view></router-view> </v-slide-x-reverse-transition
      ></v-col> -->
    <v-fade-transition mode="out-in">
      <courier-sign-in @onCourier="onCourierHandler" v-if="!getCourier()">
      </courier-sign-in>

      <check-in-stepper
        v-if="getCourier()"
        :courier="getCourier()"
      ></check-in-stepper>
    </v-fade-transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CheckInStepper from "./CheckInStepper";
import CourierSignIn from "../../components/courier/CourierSignIn";

export default {
  name: "CheckInView",
  components: { CourierSignIn, CheckInStepper },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["setCourier"]),
    ...mapGetters(["getCourier"]),

    onCourierHandler(data) {
      console.log(data);
      this.setCourier(data);
    },
  },
};
</script>

<style scoped></style>
