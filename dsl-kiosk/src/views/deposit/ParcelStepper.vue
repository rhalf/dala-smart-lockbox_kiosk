<template>
  <!-- <v-stepper v-model="stepState" alt-labels dark flat class="transparent"> -->
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        Scan Code
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 2" step="2">
        Parcel Details
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 3" step="3">
        Pick a Locker
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 4" step="4"> Done </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row>
          <v-col>
            <parcel-code @onParcelCode="onParcelCode"></parcel-code>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn color="primary--text" @click="parcelHandler()" large light>
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <parcel-details v-model="locker"></parcel-details>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              color="primary--text"
              @click="parcelDetailsHandler()"
              large
              light
            >
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-row>
          <v-col>
            <parcel-locker></parcel-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              color="primary--text"
              @click="parcelLockerHandler()"
              large
              light
            >
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row>
          <v-col>
            <parcel-done :enable="stepState != 4"></parcel-done>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn color="primary--text" @click="goToDeposit()" large light>
              Yes
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary--text" @click="goToHome()" large light>
              No
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
// import splLockerApi from "../../api/splLockerApi";
// import courier from "../../components/courier";
// import parcel from "../../components/parcel";
// import locker from "./locker";
// import commitDeposit from "./commitDeposit";

import { mapActions } from "vuex";
import ParcelCode from "../../components/parcel/ParcelCode";
import ParcelDetails from "../../components/parcel/ParcelDetails";
import ParcelLocker from "../../components/parcel/ParcelLocker";
import ParcelDone from "../../components/parcel/ParcelDone";

export default {
  name: "DepositStepper",
  //   mixins: [splLockerApi],
  components: { ParcelCode, ParcelDetails, ParcelLocker, ParcelDone }, //courier, parcel, locker, commitDeposit },
  data() {
    return {
      parcelCode: null,

      courier: null,
      parcel: null,
      locker: null,
      stepState: 1,
    };
  },
  methods: {
    ...mapActions(["setLoadingSpinner"]),

    parcelHandler(data) {
      console.log(data);
      this.setLoadingSpinner({ visible: true });
      this.timeout = setTimeout(() => {
        this.setLoadingSpinner({ visible: false });
        this.stepState++;
      }, 500);
    },

    parcelDetailsHandler(data) {
      console.log(data);
      this.setLoadingSpinner({ visible: true });
      this.timeout = setTimeout(() => {
        this.setLoadingSpinner({ visible: false });
        this.stepState++;
      }, 500);
    },

    parcelLockerHandler(locker) {
      console.log(locker);
      this.setLoadingSpinner({ visible: true });
      this.timeout = setTimeout(() => {
        this.setLoadingSpinner({ visible: false });
        this.stepState++;
      }, 500);
    },

    onParcelCode(code) {
      this.parcelCode = code;
    },

    goToHome() {
      this.$router.go("/home");
    },

    goToDeposit() {
      this.$router.go("/deposit");
    },
  },
};
</script>

<style scoped>
.stepper {
  background-color: rgba(0, 0, 0, 0.5);
}

/* .stepper:active {
  background-color: rgba(256, 0, 0, 0.5);
} */
</style>
