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
            <parcel-code-check-in
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></parcel-code-check-in>
          </v-col>
        </v-row>
        <!-- <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn color="primary--text" @click="parcelHandler()" large light>
              Continue
            </v-btn>
          </v-col>
        </v-row> -->
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
            <parcel-done-check-in
              :enable="stepState != 4"
            ></parcel-done-check-in>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn color="primary--text" @click="goToCheckIn()" large light>
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
import ParcelCodeCheckIn from "../../components/parcel/ParcelCodeCheckIn";
import ParcelDetails from "../../components/parcel/ParcelDetails";
import ParcelLocker from "../../components/parcel/ParcelLocker";
import ParcelDoneCheckIn from "../../components/parcel/ParcelDoneCheckIn";

export default {
  name: "CheckInStepper",
  //   mixins: [splLockerApi],
  components: {
    ParcelCodeCheckIn,
    ParcelDetails,
    ParcelLocker,
    ParcelDoneCheckIn,
  }, //courier, parcel, locker, commitDeposit },
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

    onParcelCodeHandler(data) {
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

    goToHome() {
      this.$router.replace("/home");
    },

    goToCheckIn() {
      this.$router.go(0);
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
