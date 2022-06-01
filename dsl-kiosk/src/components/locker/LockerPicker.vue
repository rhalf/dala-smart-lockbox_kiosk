<template>
  <v-row>
    <v-col cols="3" v-for="locker in lockers" :key="locker.id" class="pa-5">
      <v-card
        :disabled="
          !(locker.orderId == null)
            | order.sizeCodes.contains(locker.lockerModel.sizeCode)
        "
        :key="locker.id"
        :light="!locker.lockerStatusId == 0"
        :dark="locker.lockerStatusId == 0"
        :class="`rounded text-center font secondary--text
          ${locker.orderId ? 'yellowDark' : ''} 
          ${locker.selected ? 'selected' : ''}
          ${locker.selected ? 'selected' : ''}
        `"
        ripple
        @click="selectedLocker(locker)"
      >
        <v-row no-gutters>
          <v-col cols="3" class="secondary d-flex align-center justify-center">
            <div class="font-large white--text">
              {{ locker.number | toPad(2) }}
            </div>
          </v-col>
          <v-col cols="6" class="ma-auto py-2 pl-4 text-left">
            <v-row no-gutters>
              <v-col>
                <div class="font-small">
                  {{ locker.lockerModel.sizeCode }}
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <div class="font-small text-uppercase" v-show="locker.orderId">
                  occupied
                </div>
                <div class="font-small text-uppercase" v-show="!locker.orderId">
                  empty
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3" class="ma-auto pa-2 text-left">
            <v-icon size="50" v-show="locker.locked" class="secondary--text">
              mdi-locker
            </v-icon>
            <v-icon size="50" v-show="!locker.locked" class="secondary--text">
              mdi-locker
            </v-icon>
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
  outline: 8px solid #deb800 !important;
}

.font-large {
  font-size: 45px;
}
.font-small {
  font-size: 20px;
}
</style>
