<template>
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        Scan Parcel Code
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 2" step="2">
        Parcel Details
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 3" step="3">
        Select Locker
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
            <parcel-code-check-in
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></parcel-code-check-in>
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
              @click="onParcelDetailsHandler"
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
            <parcel-select-locker></parcel-select-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              :disabled="!locker"
              class="title"
              color="primary--text"
              @click="onParcelSelectLockerHandler"
              x-large
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
            <parcel-check-in-locker></parcel-check-in-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              :disabled="!locker"
              class="title"
              color="primary--text"
              @click="onParcelCheckLockerHandler"
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
            <parcel-done-check-in
              :enable="stepState != 5"
            ></parcel-done-check-in>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ParcelCodeCheckIn from "../../components/parcel/ParcelCodeCheckIn";
import ParcelDetails from "../../components/parcel/ParcelDetails";
import ParcelSelectLocker from "../../components/parcel/ParcelSelectLocker";
import ParcelCheckInLocker from "../../components/parcel/ParcelCheckInLocker";
import ParcelDoneCheckIn from "../../components/parcel/ParcelDoneCheckIn";

export default {
  name: "CheckInStepper",
  components: {
    ParcelCodeCheckIn,
    ParcelDetails,
    ParcelSelectLocker,
    ParcelDoneCheckIn,
    ParcelCheckInLocker,
  },
  data() {
    return {
      stepState: 1,
    };
  },
  computed: {
    ...mapGetters("locker", ["locker"]),
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),

    onParcelCodeHandler() {
      this.stepState = 2;
    },

    onParcelDetailsHandler() {
      this.stepState = 3;
    },

    onParcelSelectLockerHandler() {
      this.stepState = 4;
    },

    onParcelCheckLockerHandler() {
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
