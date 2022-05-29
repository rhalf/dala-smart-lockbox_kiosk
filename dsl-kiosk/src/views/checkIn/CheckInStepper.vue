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
        Select a Locker
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 4" step="4">
        Checking a Locker
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 5" step="5"> Done </v-stepper-step>
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
              @click="parcelDetailsHandler"
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
              @click="parcelSelectLockerHandler"
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
            <parcel-check-locker></parcel-check-locker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              :disabled="!locker"
              class="title"
              color="primary--text"
              @click="parcelCheckLockerHandler"
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
              @onDone="onDoneHandler"
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
import ParcelCheckLocker from "../../components/parcel/ParcelCheckLocker";
import ParcelDoneCheckIn from "../../components/parcel/ParcelDoneCheckIn";

export default {
  name: "CheckInStepper",
  components: {
    ParcelCodeCheckIn,
    ParcelDetails,
    ParcelSelectLocker,
    ParcelDoneCheckIn,
    ParcelCheckLocker,
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

    parcelDetailsHandler() {
      this.stepState = 3;
    },

    parcelSelectLockerHandler() {
      this.stepState = 4;
    },
    parcelCheckLockerHandler() {
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
