<template>
  <BaseSheet scrollable>
    <CheckOutLockerChecker
      @onCheckedLocker="onCheckedLockerhandler"
    ></CheckOutLockerChecker>
  </BaseSheet>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseSheet from "@/components/common/BaseSheet";
import CheckOutLockerChecker from "@/components/locker/CheckOutLockerChecker";

export default {
  name: "CheckOutLocker",
  components: { BaseSheet, CheckOutLockerChecker },
  props: {
    enable: Boolean,
  },
  data() {
    return {
      timeInterval: null,
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
