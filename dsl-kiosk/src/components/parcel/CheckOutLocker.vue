<template>
  <v-sheet height="450" class="transparent vertical-scroll">
    <check-out-locker-checker
      @onCheckedLocker="onCheckedLockerhandler"
    ></check-out-locker-checker>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import CheckOutLockerChecker from "../locker/CheckOutLockerChecker";

export default {
  name: "CheckOutLocker",
  components: { CheckOutLockerChecker },
  methods: {
    ...mapActions("locker", ["setLocker"]),

    onCheckedLockerhandler(locker) {
      this.setLocker(locker);
      this.$emit("onCheckedLocker");
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
