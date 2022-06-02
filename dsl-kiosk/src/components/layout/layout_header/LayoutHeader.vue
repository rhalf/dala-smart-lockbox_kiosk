<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-img :src="logo" width="200"></v-img>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="auto" class="ma-auto">
        <v-menu offset-y :nudge-width="100" v-if="rider">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon fab dark v-bind="attrs" v-on="on">
              <v-icon>mdi-truck-fast</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0">
            <!-- <v-list-item v-for="(item, index) in items" :key="index"> -->
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

        <v-btn icon fab dark @click="$router.push('/home').catch(() => {})">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon fab dark @click="$router.push('setting').catch(() => {})">
          <v-icon>mdi-cog</v-icon>
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
    };
  },
  computed: {
    ...mapGetters("rider", ["rider"]),
  },
  methods: {
    ...mapActions("rider", ["setRider"]),
    ...mapActions("dialog", ["setInfo"]),

    riderLogoutHandler() {
      this.setRider(null);
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
};
</script>
