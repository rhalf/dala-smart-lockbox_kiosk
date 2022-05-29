<template>
  <v-sheet height="450" class="transparent vertical-scroll">
    <locker-picker @onSelectedLocker="onSelectedLockerhandler"></locker-picker>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import LockerPicker from "../locker/LockerPicker";

export default {
  name: "ParcelSelectLocker",
  components: { LockerPicker },
  methods: {
    ...mapActions("locker", ["setLocker"]),

    onSelectedLockerhandler(locker) {
      this.setLocker(locker);
      this.$emit("onParcelLocker");
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
