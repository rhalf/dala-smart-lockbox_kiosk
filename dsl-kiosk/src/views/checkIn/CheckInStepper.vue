<template>
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        <label :class="getClass(1)">Scan Code</label>
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="stepState > 2" step="2">
        <label :class="getClass(2)">Parcel Details</label>
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="stepState > 3" step="3">
        <label :class="getClass(3)">Select Locker</label>
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="stepState > 4" step="4">
        <label :class="getClass(4)">Check Locker</label>
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
            <check-in-code
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></check-in-code>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <check-in-details></check-in-details>
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
            <check-in-select-locker></check-in-select-locker>
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
            <check-in-locker :enable="stepState == 4"></check-in-locker>
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
              @click="onParcelCheckInLockerHandler"
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
            <check-in-completed :enable="stepState == 5"></check-in-completed>
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
import CheckInCode from "../../components/parcel/CheckInCode";
import CheckInDetails from "../../components/parcel/CheckInDetails";
import CheckInSelectLocker from "../../components/parcel/CheckInSelectLocker";
import CheckInLocker from "../../components/parcel/CheckInLocker";
import CheckInCompleted from "../../components/parcel/CheckInCompleted";

export default {
  name: "CheckInStepper",
  components: {
    CheckInCode,
    CheckInDetails,
    CheckInSelectLocker,
    CheckInCompleted,
    CheckInLocker,
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
    ...mapGetters("locker", ["locker"]),
    ...mapGetters("locker", ["passed"]),
    ...mapGetters("order", ["order"]),
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
    ...mapActions("locker", ["setLockerOrder"]),

    onParcelCodeHandler() {
      this.stepState = 2;
    },

    onParcelDetailsHandler() {
      this.stepState = 3;
    },

    onParcelSelectLockerHandler() {
      this.stepState = 4;
    },

    async onParcelCheckInLockerHandler() {
      const payload = {
        locker: this.locker,
        order: this.order,
      };

      this.setLoading({ visible: true });
      const response = await this.setLockerOrder(payload);
      console.log("..................", "hey");
      this.setLoading({ visible: false });

      if (!response) {
        return;
      }
      this.stepState = 5;
    },

    async onByPassHandler() {
      await this.onParcelCheckInLockerHandler();
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
</style>
