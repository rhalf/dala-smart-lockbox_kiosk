<template>
  <BaseSheet scrollable>
    <check-in-locker-checker
      @onCheckedLocker="onCheckedLockerhandler"
    ></check-in-locker-checker>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import { mapActions, mapGetters } from "vuex";
import CheckInLockerChecker from "@/components/locker/CheckInLockerChecker";

// import cu48bApi from "@/api/cu48bApi";

export default {
  name: "CheckInLocker",
  components: { BaseSheet, CheckInLockerChecker },
  props: {
    enable: Boolean,
  },
  data() {
    return {
      timeInterval: null,
      board: null,
    };
  },
  methods: {
    ...mapActions("cu48b", ["readCu48b"]),

    onCheckedLockerhandler(locker) {
      this.setLocker(locker);
      this.$emit("onCheckedLocker");
    },
  },
  computed: {
    ...mapGetters("locker", ["locker"]),
    ...mapGetters("cu48b", ["cu48bLockers"]),
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
  watch: {
    enable(present, previous) {
      if (present && previous != present) {
        this.timeInterval = setInterval(() => {
          if (this.locker)
            this.readCu48b({ boardNumber: this.locker.boardNumber });
          // cu48bApi
          //   .readCu48b({ boardNumber: this.locker.boardNumber })
          //   .then((response) => {
          //     this.board = response.data;
          //   });
        }, 2000);
      }
      if (!present && previous != present) {
        clearInterval(this.timeInterval);
      }
    },
  },
};
</script>

<style scoped></style>
