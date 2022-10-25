<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <Locker :item="locker"></Locker>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class="mt-15">
      <v-spacer></v-spacer>

      <v-col cols="4" v-if="isLockerClosed">
        <v-sheet outlined class="white green--text headline pa-4 rounded">
          <v-icon x-large left color="green"> mdi-check-circle</v-icon>
          <label>Locker door is <strong>CLOSE</strong></label>
        </v-sheet>
      </v-col>

      <v-col cols="4" v-if="!isLockerClosed">
        <v-sheet outlined class="white red--text headline pa-4 rounded">
          <v-icon x-large left color="red"> mdi-close-circle</v-icon>
          <label>Locker door is <strong>OPEN</strong></label>
        </v-sheet>
      </v-col>

      <v-col cols="4" v-if="isLockerOccupied">
        <v-sheet outlined class="white green--text headline pa-4 rounded">
          <v-icon x-large left color="green"> mdi-check-circle</v-icon>
          <label>Locker is <strong>OCCUPIED</strong></label>
        </v-sheet>
      </v-col>

      <v-col cols="4" v-if="!isLockerOccupied">
        <v-sheet outlined class="white red--text headline pa-4 rounded">
          <v-icon x-large left color="red"> mdi-close-circle</v-icon>
          <label>Locker is <strong>EMPTY</strong></label>
        </v-sheet>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class="mt-15">
      <v-spacer></v-spacer>
      <v-col cols="4">
        <v-btn
          block
          rounded
          x-large
          class="yellowDark"
          height="80"
          dark
          @click="unlockLockerHandler"
        >
          <span class="font-weight-bold">Press to Open the Locker </span>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import cu48bApi from "@/api/cu48bApi";
import ssoApi from "@/api/ssoApi";

import Locker from "@/components/common/Locker.vue";

export default {
  components: { Locker },
  name: "CheckInLockerChecker",
  data() {
    return {
      timerHandler: null,
      timeOut: 60 * 1000,
    };
  },
  computed: {
    ...mapGetters("order", ["order"]),
    ...mapGetters("locker", ["locker"]),
    ...mapGetters("cu48b", ["cu48bLockers", "cu48bSensors"]),

    isLockerClosed() {
      if (!this.cu48bLockers) return false;
      if (!this.locker) return false;
      return this.cu48bLockers[this.locker.number] == 1;
    },
    isLockerOccupied() {
      if (!this.cu48bSensors) return false;
      if (!this.locker) return false;
      return this.cu48bSensors[this.locker.number] == 1;
    },
  },
  methods: {
    ...mapActions("cu48b", ["unlockCu48b"]),
    ...mapActions("locker", [
      "setLocker",
      "setLockerPassed",
      "closeLocker",
      "openLocker",
      "openStateLocker",
    ]),

    unlockLockerHandler() {
      cu48bApi.unlockCu48b({
        boardNumber: this.locker.boardNumber,
        lockerNumber: this.locker.number,
      });
    },
  },

  watch: {
    isLockerClosed(present, previous) {
      if (!present && present != previous) {
        ssoApi.lockerOpen({
          locker: this.locker,
          order: this.order,
          type: "check-in",
        });
        this.timerHandler = setTimeout(() => {
          ssoApi.lockerOpenState({
            locker: this.locker,
            order: this.order,
            minutes: 1,
          });
        }, this.timeOut);
      }
      if (present && present != previous) {
        ssoApi.lockerClose({
          locker: this.locker,
          order: this.order,
          type: "check-in",
        });
        clearTimeout(this.timerHandler);
      }

      this.setLockerPassed(this.isLockerClosed && this.isLockerOccupied);
    },
    isLockerOccupied() {
      this.setLockerPassed(this.isLockerClosed && this.isLockerOccupied);
    },
  },
};
</script>

<style scoped></style>
