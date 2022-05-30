<template>
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        Scan Pick-Up Code
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 2" step="2">
        Parcel Details
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 3" step="3">
        Enter One-Time-Pin
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 4" step="4">
        Checking Locker
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 5" step="5">
        Completed
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row>
          <v-col>
            <parcel-code-check-out
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></parcel-code-check-out>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <parcel-details></parcel-details>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onParcelDetailsHandler()"
              x-large
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
            <parcel-otp @onParcelOtp="onParcelOtpHandler()"></parcel-otp>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row>
          <v-col>
            <parcel-check-out-locker></parcel-check-out-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onParcelCheckOutLocker()"
              x-large
              light
            >
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-row>
          <v-col>
            <parcel-done-check-out
              :enable="stepState != 5"
            ></parcel-done-check-out>
          </v-col>
        </v-row>
        <v-row><v-col></v-col></v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import ParcelCodeCheckOut from "../../components/parcel/ParcelCodeCheckOut";
import ParcelDetails from "../../components/parcel/ParcelDetails";
import ParcelOtp from "../../components/parcel/ParcelOtp";
import ParcelCheckOutLocker from "../../components/parcel/ParcelCheckOutLocker";
import ParcelDoneCheckOut from "../../components/parcel/ParcelDoneCheckOut";

export default {
  name: "CheckOutStepper",
  components: {
    ParcelCodeCheckOut,
    ParcelDetails,
    ParcelOtp,
    ParcelDoneCheckOut,
    ParcelCheckOutLocker,
  },
  data() {
    return {
      stepState: 1,
    };
  },
  methods: {
    onParcelCodeHandler() {
      this.stepState = 2;
    },

    onParcelDetailsHandler() {
      this.stepState = 3;
    },

    onParcelOtpHandler() {
      this.stepState = 4;
    },

    onParcelCheckOutLocker() {
      this.stepState = 5;
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
