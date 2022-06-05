<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="auto" class="d-flex justify-center align-center">
        <div>
          <v-img :src="logo" :aspect-ratio="16 / 6" :width="240"></v-img>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="d-flex justify-center align-center">
        <v-menu offset-y :nudge-width="100" v-if="rider">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon fab dark v-bind="attrs" v-on="on">
              <v-icon>mdi-truck-fast</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0">
            <v-list-item-title>
              <v-btn @click="riderDetailsHandler" class="py-6" block>
                <v-icon left>mdi-text-account</v-icon>
                Rider Details
              </v-btn>
            </v-list-item-title>
            <v-list-item-title>
              <v-btn @click="riderLogoutHandler" class="py-6" block>
                <v-icon left>mdi-logout</v-icon>
                Rider Logout
              </v-btn>
            </v-list-item-title>
            <!-- </v-list-item> -->
          </v-list>
        </v-menu>

        <v-menu offset-y :nudge-width="100">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon fab dark v-bind="attrs" v-on="on">
              <v-icon v-if="status">mdi-earth</v-icon>
              <v-icon v-if="!status">mdi-earth-off</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0">
            <v-list-item-title>
              <v-btn v-if="status" class="py-6">
                <v-icon>mdi-rotate-3d-variant</v-icon>Connected</v-btn
              >
              <v-btn v-if="!status" class="py-6">
                <v-icon>mdi-close</v-icon>Not Connected
              </v-btn>
            </v-list-item-title>
          </v-list>
        </v-menu>

        <v-btn icon fab dark @click="$router.push('/home').catch(() => {})">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon fab dark @click="$router.go().catch(() => {})">
          <v-icon>mdi-reload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import logo from "../../../assets/Logos/White/SVG/Logo_Solid_Horizontal_W.svg";
export default {
  data() {
    return {
      logo: logo,
      timeIntervalHandler: null,
    };
  },
  mounted() {
    this.timeIntervalHandler = setInterval(() => {
      this.connect();
    }, 10000);
  },
  computed: {
    ...mapGetters("rider", ["rider"]),
    ...mapGetters("connection", ["status"]),
  },
  methods: {
    ...mapActions("connection", ["connect"]),
    ...mapActions("rider", ["setRider"]),
    ...mapActions("dialog", ["setInfo"]),

    async riderLogoutHandler() {
      this.setRider(null);
      await this.$router.go(0);
    },
    riderDetailsHandler() {
      this.setInfo({
        visible: true,
        messages: [
          `Name: ${this.rider.firstName} ${this.rider.lastName}`,
          `Email: ${this.rider.email}`,
          `Number: ${this.rider.mobileNumber}`,
        ],
      });
    },
  },

  beforeDestroy() {
    clearInterval(this.timeIntervalHandler);
  },
};
</script>
