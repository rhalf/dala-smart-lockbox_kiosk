<template>
  <v-row>
    <v-col cols="3" v-for="locker in lockers" :key="locker.id" class="pa-5">
      <v-card
        :key="locker.id"
        :light="!locker.lockerStatusId == 0"
        :dark="locker.lockerStatusId == 0"
        :class="`pa-2 rounded text-center display-1 secondary--text ${
          locker.selected ? 'selected' : ''
        }`"
        height="100"
        width="300"
        ripple
        :color="locker.lockerStatusId == 0 ? 'secondary' : 'white'"
        @click="selectedLocker(locker)"
      >
        <v-row no-gutters>
          <v-col cols="5" class="ma-auto pr-2">
            <label class="display-3 font-weight-bold">
              {{ locker.number }}
            </label>
          </v-col>
          <v-col>
            <v-row no-gutters>
              <v-col class="headline text-left text-uppercase">
                <label>{{ locker.size }}</label>
              </v-col>
              <v-col class="ma-auto">
                <v-icon x-large v-show="locker.locked" class="secondary--text"
                  >mdi-lock</v-icon
                >
                <v-icon x-large v-show="!locker.locked" class="secondary--text"
                  >mdi-lock-open</v-icon
                >
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
  created() {
    this.fetchLockers();
  },
  computed: {
    ...mapGetters("locker", ["lockers"]),
    ...mapGetters("locker", ["locker"]),
  },
  methods: {
    ...mapActions("locker", ["fetchLockers"]),
    ...mapActions("locker", ["setLocker"]),
    ...mapActions("locker", ["setLockers"]),

    selectedLocker(locker) {
      this.setLocker(null);

      this.lockers.forEach((l) => {
        if (l.id === locker.id) l.selected = true;
        else l.selected = false;
      });

      // console.log("locker/lockers", this.lockers);

      this.setLockers([...this.lockers]);
      this.setLocker(locker);
    },
  },
};
</script>

<style scoped>
.selected {
  border: 6px solid #deb800 !important;
}
</style>
