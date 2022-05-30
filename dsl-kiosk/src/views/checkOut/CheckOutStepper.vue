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
            <check-out-code
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></check-out-code>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <check-out-details></check-out-details>
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
            <check-out-otp @onParcelOtp="onParcelOtpHandler()"></check-out-otp>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row>
          <v-col>
            <check-out-locker></check-out-locker>
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
            <check-out-completed :enable="stepState != 5"></check-out-completed>
          </v-col>
        </v-row>
        <v-row><v-col></v-col></v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CheckOutCode from "../../components/parcel/CheckOutCode";
import CheckOutDetails from "../../components/parcel/CheckOutDetails";
import CheckOutOtp from "../../components/parcel/CheckOutOtp";
import CheckOutLocker from "../../components/parcel/CheckOutLocker";
import CheckOutCompleted from "../../components/parcel/CheckOutCompleted";

export default {
  name: "CheckOutStepper",
  components: {
    CheckOutCode,
    CheckOutDetails,
    CheckOutOtp,
    CheckOutCompleted,
    CheckOutLocker,
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
