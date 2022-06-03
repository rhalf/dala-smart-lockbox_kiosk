<template>
  <v-sheet height="450" class="transparent vertical-scroll">
    <check-out-locker-checker
      @onCheckedLocker="onCheckedLockerhandler"
    ></check-out-locker-checker>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CheckOutLockerChecker from "../locker/CheckOutLockerChecker";

export default {
  name: "CheckOutLocker",
  components: { CheckOutLockerChecker },
  props: {
    enable: Boolean,
  },
  data() {
    return {
      timeInterval: null,
    };
  },
  methods: {
    ...mapActions("cu48b", ["fetchCu48b"]),

    onCheckedLockerhandler(locker) {
      this.setLocker(locker);
      this.$emit("onCheckedLocker");
    },
  },
  computed: {
    ...mapGetters("cu48b", ["cu48bLockers"]),
  },
  watch: {
    enable(present, previous) {
      if (previous == false && previous != present) {
        this.timeInterval = setInterval(() => {
          this.fetchCu48b();
        }, 2000);
      } else {
        clearInterval(this.timeInterval);
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
