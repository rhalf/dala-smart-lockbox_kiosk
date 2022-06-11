<template>
  <v-overlay :absolute="false" :value="true" :opacity="0.75">
    <div>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <div class="lds-dual-ring"></div>
          </v-col>
        </v-row>
        <v-row><v-col></v-col></v-row>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <div class="display-1">Under Maintenance</div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-overlay>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MaintenanceView",
  data() {
    return {
      timeHandler: null,
      timeInterval: 10,
    };
  },
  mounted() {
    this.timeHandler = setInterval(() => {
      this.connect();
    }, this.timeInterval * 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeHandler);
  },
  methods: {
    ...mapActions("connection", ["connect"]),
  },
  computed: {
    ...mapGetters("connection", ["maintenance"]),
  },
};
</script>

<style scoped></style>
