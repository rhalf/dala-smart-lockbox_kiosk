<template>
  <BaseSheet scrollable custom-class="text-center">
    <v-container>
      <v-row>
        <v-col>
          <label class="pa-10 display-2">Check-Out Completed</label>
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
            @click="getMoreHandler()"
          >
            <v-icon left>mdi-check</v-icon>
            Get More
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
            Press <strong>"GET MORE"</strong> if you want to check-out new
            parcel.
          </p>
          <p class="headline">
            Press <strong>"END NOW"</strong> if you want to end your
            transaction.
          </p>
        </v-col>
      </v-row>
      <v-row> </v-row>
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
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import { mapActions } from "vuex";
export default {
  name: "CheckOutCompleted",
  components: { BaseSheet },
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
    ...mapActions("order", ["setOrder"]),
    ...mapActions("locker", ["setLocker", "setLockerPassed"]),

    async getMoreHandler() {
      this.setOrder(null);
      this.setLocker(null);
      this.setLockerPassed(false);
      await this.$router.push({ name: "Home" });
      await this.$router.push({ name: "CheckOut" });
      clearInterval(this.timeIntervalHandler);
    },

    async endNowHandler() {
      this.setOrder(null);
      this.setLocker(null);
      this.setLockerPassed(false);
      await this.$router.push({ name: "Home" });
      clearInterval(this.timeIntervalHandler);
    },

    runTimer() {
      this.timeIntervalHandler = setInterval(() => {
        this.timeValue--;
        this.progress = (this.timeValue / this.timeInterval) * 100;

        if (this.timeValue < 0) {
          this.endNowHandler();
        }
      }, 1000);
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

<style scoped></style>
