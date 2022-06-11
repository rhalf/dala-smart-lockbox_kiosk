<template>
  <v-row>
    <v-col cols="3" v-for="lr in lockers" :key="lr.id" class="pa-5">
      <v-card
        :disabled="!(lr.orderId == null)"
        :key="lr.id"
        :light="!lr.lockerStatusId == 0"
        :dark="lr.lockerStatusId == 0"
        :class="`rounded text-center font secondary--text
          ${lr.selected ? 'selected' : ''}
          ${lr.orderId ? 'yellowDark' : ''} 
        `"
        ripple
        @click="selectedLocker(lr)"
      >
        <v-row no-gutters>
          <v-col cols="3" class="secondary d-flex align-center justify-center">
            <div class="font-large white--text">
              {{ lr.number | toPad(2) }}
            </div>
          </v-col>
          <v-col cols="6" class="ma-auto py-2 pl-4 text-left">
            <v-row no-gutters>
              <v-col>
                <div class="font-small">
                  {{ lr.lockerModel.sizeCode }}
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <div class="font-small text-uppercase" v-show="lr.orderId">
                  occupied
                </div>
                <div class="font-small text-uppercase" v-show="!lr.orderId">
                  empty
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3" class="ma-auto pa-2 text-left">
            <v-icon size="50" v-show="lr.locked" class="secondary--text">
              mdi-locker
            </v-icon>
            <v-icon size="50" v-show="!lr.locked" class="secondary--text">
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
  name: "LockerViewer",
  mounted() {
    this.fetchLockers();
  },
  computed: {
    ...mapGetters("locker", ["lockers", "locker"]),
    ...mapGetters("order", ["order"]),
  },
  methods: {
    ...mapActions("locker", ["fetchLockers", "setLocker", "setLockers"]),
    selectedLocker(locker) {
      this.lockers.forEach((l) => {
        if (l.id === locker.id) l.selected = true;
        else l.selected = false;
      });
      this.setLockers([...this.lockers]);
    },
    isValidSize(locker) {
      if (this.order && locker.lockerModel)
        return this.order.sizeCodes.includes(locker.lockerModel.sizeCode);
      return false;
    },
    isSelected(locker) {
      if (!this.locker) return false;
      return this.locker.number == locker.number;
    },
  },
};
</script>

<style scoped>
.selected {
  outline: 8px solid #deb800 !important;
}
</style>
