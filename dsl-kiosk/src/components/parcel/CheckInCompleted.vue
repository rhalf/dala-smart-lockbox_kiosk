<template>
  <v-sheet height="450" class="transparent vertical-scroll text-center">
    <v-container>
      <v-row>
        <v-col>
          <label class="pa-10 display-2">Check-In Completed</label>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-btn
            class="title"
            color="primary--text"
            x-large
            light
            @click="addMoreHandler()"
          >
            <v-icon left>mdi-check</v-icon>
            Add More
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            class="title"
            color="red--text"
            x-large
            light
            @click="endNowHandler()"
          >
            <v-icon left>mdi-close</v-icon>
            end now
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col>
          <p class="headline">
            Press <strong>"YES"</strong> if you want to check-in new parcel.
          </p>
          <p class="headline">
            Press <strong>"NO"</strong> if you want to end your transaction.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col><v-divider></v-divider> </v-col> -->
      </v-row>
      <v-row>
        <v-col>
          <v-progress-circular
            :value="progress"
            color="yellowLight"
            size="100"
            :width="10"
            x-large
          >
          </v-progress-circular>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="display-1">Terminates automatically in {{ timeValue }}s.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CheckInCompleted",
  props: {
    enable: Boolean,
  },
  data() {
    return {
      timeIntervalHandler: null,
      timeInterval: 20,
      timeValue: 0,
      progress: 0,
    };
  },

  methods: {
    ...mapActions("rider", ["setRider"]),
    ...mapActions("order", ["setOrder"]),
    ...mapActions("locker", ["setLocker"]),
    ...mapActions("locker", ["setLockerPassed"]),

    async addMoreHandler() {
      this.setOrder(null);
      this.setLocker(null);
      this.setLockerPassed(false);
      await this.$router.push("/home");
      await this.$router.push("/check-in");
      // this.$router.go(this.$router.currentRoute);
      clearInterval(this.timeIntervalHandler);
    },

    endNowHandler() {
      this.setOrder(null);
      this.setLocker(null);
      this.setRider(null);
      this.setLockerPassed(false);
      this.$router.push("/home");
      // this.$router.go(0);
      clearInterval(this.timeIntervalHandler);
    },

    runTimer() {
      this.timeIntervalHandler = setInterval(() => {
        this.timeValue--;
        this.progress = (this.timeValue / this.timeInterval) * 100;

        if (this.timeValue < 0) {
          this.endNowHandler();
        }
      }, 1500);
    },
  },
  beforeDestroy() {
    clearInterval(this.timeIntervalHandler);
  },
  watch: {
    enable(present, previous) {
      if (present && previous != present) {
        this.runTimer();
        this.timeValue = this.timeInterval;
      }
    },
  },
};
</script>

<style scoped>
.vertical-scroll {
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  padding: 0.5rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.vertical-scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
