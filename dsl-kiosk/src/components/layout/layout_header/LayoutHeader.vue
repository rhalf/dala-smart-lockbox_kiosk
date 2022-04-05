<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :src="logo" width="200"></v-img>
      </v-col>
      <v-spacer></v-spacer>

      <v-col cols="auto" class="ma-auto">
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
import logo from "../../../assets/Logos/White/PNG/Logo_Solid_Horizontal_W-01.png";
export default {
  data() {
    return {
      data: "asdasdasdas",
      logo: logo,
    };
  },
};
</script>
