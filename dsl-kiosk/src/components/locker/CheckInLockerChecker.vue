<template>
  <v-container>
    <v-row>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
              <v-row>
                <v-col>
                  <v-btn
                    x-large
                    class="purple"
                    block
                    dark
                    height="80"
                    @click="unlockLockerHandler"
                  >
                    <!-- <v-icon large left>mdi-check</v-icon>/ -->
                    Press to Open the Locker
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="isLockerClosed">
                <v-col>
                  <v-card outlined class="white green--text headline pa-4">
                    <v-icon x-large left color="green">
                      mdi-check-circle</v-icon
                    >
                    <label>Locker door is <strong>CLOSE</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row v-if="!isLockerClosed">
                <v-col>
                  <v-card outlined class="white red--text headline pa-4">
                    <v-icon x-large left color="red"> mdi-close-circle</v-icon>
                    <label>Locker door is <strong>OPEN</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row v-if="isLockerOccupied">
                <v-col>
                  <v-card outlined class="white green--text headline pa-4">
                    <v-icon x-large left color="green">
                      mdi-check-circle</v-icon
                    >
                    <label>Locker is <strong>OCCUPIED</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row v-if="!isLockerOccupied">
                <v-col>
                  <v-card outlined class="white red--text headline pa-4">
                    <v-icon x-large left color="red"> mdi-close-circle</v-icon>
                    <label>Locker is <strong>EMPTY</strong></label>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CheckInLockerChecker",
  created() {},
  computed: {
    ...mapGetters("locker", ["locker"]),
    ...mapGetters("cu48b", ["cu48bLockers"]),
    ...mapGetters("cu48b", ["cu48bSensors"]),

    isLockerClosed() {
      if (!this.cu48bLockers) return false;
      if (!this.locker) return false;
      return this.cu48bLockers[this.locker.number - 1] == 1;
    },
    isLockerOccupied() {
      if (!this.cu48bSensors) return false;
      if (!this.locker) return false;
      return this.cu48bSensors[this.locker.number - 1] == 1;
    },
  },
  methods: {
    ...mapActions("cu48b", ["unlockCu48b"]),
    ...mapActions("locker", ["setLocker"]),
    ...mapActions("locker", ["setLockerPassed"]),

    unlockLockerHandler() {
      this.unlockCu48b({ id: this.locker.number });
    },
  },

  watch: {
    isLockerClosed() {
      this.setLockerPassed(this.isLockerClosed && this.isLockerOccupied);
    },
    isLockerOccupied() {
      this.setLockerPassed(this.isLockerClosed && this.isLockerOccupied);
    },
  },
};
</script>

<style scoped>
.selected {
  border: 6px solid #deb800 !important;
}
</style>
