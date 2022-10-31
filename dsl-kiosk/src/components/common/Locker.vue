<template>
  <v-card
    v-if="item"
    :disabled="isOccupied(item) || isDisabled(item)"
    :key="item.id"
    :light="!isOccupied(item)"
    :dark="isOccupied(item)"
    class="rounded text-center font secondary--text"
    :class="`${isSelected(item) ? 'selected' : ''}
        ${isOccupied(item) ? 'yellowDark' : ''} 
        ${isDisabled(item) ? 'grey' : ''}
        `"
    @click="selectLocker(item)"
    :ripple="false"
  >
    <v-row no-gutters>
      <v-col cols="3" class="secondary d-flex align-center justify-center">
        <div class="font-medium white--text">
          {{ item.number | toPad(2) }}
        </div>
      </v-col>
      <v-col cols="6" class="ma-auto py-2 pl-4 text-left">
        <v-row no-gutters>
          <v-col>
            <div class="font-small font-weight-bold">
              {{ item.lockerSizeCode }}
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <div class="font-small text-uppercase">
              {{ item.lockerStatusCode }}
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" class="ma-auto pa-2 text-left">
        <v-icon size="50" v-show="item.locked" class="secondary--text">
          mdi-locker
        </v-icon>
        <v-icon size="50" v-show="!item.locked" class="secondary--text">
          mdi-locker
        </v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    item: Object,
    filter: {
      type: String,
      default: null,
    },
  },

  computed: {
    ...mapGetters("locker", ["locker"]),
    ...mapGetters("order", ["order"]),
  },
  methods: {
    ...mapActions("locker", ["setLocker"]),

    selectLocker(locker) {
      this.setLocker({ ...locker });
    },
    isSelected(locker) {
      if (!this.locker || !locker) return false;
      return this.locker.id == locker.id;
    },
    isOccupied(locker) {
      if (!locker) return false;
      return "VACANT" !== locker.lockerStatusCode;
    },
    isDisabled(locker) {
      if (!locker) return false;
      if (this.order == null) return false;
      return this.order.lockerSizeCode !== locker.lockerSizeCode;
    },
  },
};
</script>

<style scoped>
.selected {
  outline: 8px solid #deb800 !important;
}
</style>
