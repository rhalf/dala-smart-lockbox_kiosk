<template>
  <v-row>
    <v-col cols="3" v-for="locker in getLockers" :key="locker.id" class="pa-5">
      <v-card
        :light="!locker.occupied"
        :dark="locker.occupied"
        :key="locker.id"
        :class="`pa-2 rounded text-center display-1 ${
          locker.selected ? 'selected' : ''
        }`"
        height="100"
        width="300"
        :elevation="!locker.selected ? 3 : 0"
        ripple
        :color="locker.occupied ? 'secondary' : 'grey'"
        @click="selectedLocker(locker)"
      >
        <v-row no-gutters>
          <v-col cols="5" class="ma-auto pr-2">
            <label class="display-3 font-weight-bold">
              {{ locker.id + 1 }}
            </label>
          </v-col>
          <v-col>
            <v-row no-gutters>
              <v-col class="headline text-left text-uppercase">
                <label>{{ locker.size }}</label>
              </v-col>
              <v-col class="ma-auto">
                <v-icon x-large v-show="locker.locked">mdi-lock</v-icon>
                <v-icon x-large v-show="!locker.locked">mdi-lock-open</v-icon>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                class="title text-left text-uppercase"
                v-show="locker.occupied"
                >occupied</v-col
              >
              <v-col
                class="title text-left text-uppercase"
                v-show="!locker.occupied"
                >empty</v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LockerPicker",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getLockers"]),
  },
  methods: {
    ...mapActions(["setLockers"]),

    selectedLocker(locker) {
      if (locker.occupied === true) {
        return;
      }

      let lockers = this.getLockers;

      lockers.forEach((l) => {
        if (l.id === locker.id) l.selected = true;
        else l.selected = false;
      });

      this.setLockers(lockers);

      this.$emit("onSelectedLocker", locker);
    },
  },
};
</script>

<style scoped>
.selected {
  border: 5px solid red !important;
}
</style>
