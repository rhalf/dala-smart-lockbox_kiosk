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
        <v-btn icon fab dark>
          <v-icon v-if="offline.status">mdi-wifi</v-icon>
          <v-icon v-else>mdi-wifi-off</v-icon>
        </v-btn>

        <v-btn
          icon
          fab
          dark
          @click="$router.push({ name: 'Home' }).catch(() => {})"
        >
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
import logo from "@/assets/Logos/White/SVG/Logo_Solid_Horizontal_W.svg";
export default {
  data() {
    return {
      logo: logo,
    };
  },

  computed: {
    ...mapGetters("connection", ["offline", "maintenance"]),
  },
  methods: {
    ...mapActions("connection", ["connect"]),
    ...mapActions("dialog", ["setInfo"]),
  },
};
</script>
