<template>
  <v-sheet height="450" class="transparent">
    <v-card light class="ma-auto justify" width="720">
      <v-card-title class="secondary fontLight--text"
        >Rider (Sign In)
      </v-card-title>
      <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
      <v-card-text class="pa-2">
        <scan-code
          :enable="enable"
          label="Rider Id"
          :icon="Courier"
          @onScanCode="onScanCodeHandler"
        ></scan-code>
      </v-card-text>
      <v-card-actions class="secondary pa-3">
        <v-spacer></v-spacer><v-btn text large></v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import ScanCode from "../ui/ScanCode";
import Courier from "../../assets/Icons/Courier/Courier_Green.svg";
export default {
  name: "RiderSignIn",
  props: { enable: { default: false, type: Boolean } },
  components: { ScanCode },
  mounted() {},
  data() {
    return {
      Courier: Courier,
      rider: null,
    };
  },

  methods: {
    onScanCodeHandler(data) {
      this.$emit("onRiderSignIn", { riderId: data });
      console.log({ riderId: data });
    },
  },
};
</script>

<style scoped></style>
