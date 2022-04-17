<template>
  <div>
    <!-- <v-col>
        <v-slide-x-reverse-transition mode="out-in">
          <router-view></router-view> </v-slide-x-reverse-transition
      ></v-col> -->
    <v-fade-transition mode="out-in">
      <courier-sign-in @onCourier="onCourierHandler" v-if="!getCourier()">
      </courier-sign-in>

      <parcel-stepper
        v-if="getCourier()"
        :courier="getCourier()"
      ></parcel-stepper>
    </v-fade-transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ParcelStepper from "./ParcelStepper";
import CourierSignIn from "../../components/global/CourierSignIn";

export default {
  name: "DepositView",
  components: { CourierSignIn, ParcelStepper },
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
