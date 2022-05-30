<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-img :src="logo" width="200"></v-img>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="auto" class="ma-auto">
        <v-btn
          icon
          fab
          dark
          @click="$router.push('/home').catch(() => {})"
          v-if="rider"
        >
          <v-icon>mdi-truck-fast</v-icon>
        </v-btn>

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
import { mapGetters } from "vuex";
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
};
</script>
