<template>
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        <label :class="getClass(1)">Scan Pick-Up Code</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 2" step="2">
        <label :class="getClass(2)">Parcel Details</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 3" step="3">
        <label :class="getClass(3)">Enter One-Time-Pin</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 4" step="4">
        <label :class="getClass(4)">Checking Locker</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 5" step="5">
        <label :class="getClass(5)">Completed</label>
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
            <check-out-otp
              @onParcelOtp="onParcelOtpHandler()"
              :enable="stepState == 3"
            ></check-out-otp>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row>
          <v-col>
            <check-out-locker :enable="stepState == 4"></check-out-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onByPassHandler"
              x-large
              light
            >
              By Pass
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn
              :disabled="!passed"
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
            <check-out-completed :enable="stepState == 5"></check-out-completed>
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
import { mapGetters } from "vuex";

export default {
  name: "CheckOutStepper",
  components: {
    CheckOutCode,
    CheckOutDetails,
    CheckOutOtp,
    CheckOutCompleted,
    CheckOutLocker,
  },
  mounted() {
    this.stepState = 1;
  },
  data() {
    return {
      stepState: 0,
    };
  },
  computed: {
    ...mapGetters("locker", ["passed"]),
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

    onByPassHandler() {
      this.onParcelCheckOutLocker();
    },

    getClass(state) {
      if (state == this.stepState) return "font-medium";
      else return "";
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
