<template>
  <v-container>
    <v-row>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
              <v-row>
                <v-col>
                  <v-card outlined class="white green--text headline pa-4">
                    <v-icon x-large left color="green">
                      mdi-check-circle</v-icon
                    >
                    <label>Locker door is <strong>CLOSE</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card outlined class="white red--text headline pa-4">
                    <v-icon x-large left color="red"> mdi-close-circle</v-icon>
                    <label>Locker door is <strong>OPEN</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card outlined class="white green--text headline pa-4">
                    <v-icon x-large left color="green">
                      mdi-check-circle</v-icon
                    >
                    <label>Locker is now <strong>OCCUPIED</strong></label>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card outlined class="white red--text headline pa-4">
                    <v-icon x-large left color="red"> mdi-close-circle</v-icon>
                    <label>Locker is now <strong>EMPTY</strong></label>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LockerChecker",
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

    selectedLocker() {},
  },
};
</script>

<style scoped>
.selected {
  border: 6px solid #deb800 !important;
}
</style>
