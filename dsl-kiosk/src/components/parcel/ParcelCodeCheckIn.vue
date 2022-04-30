<template>
  <v-sheet height="450" class="transparent">
    <v-card light class="ma-auto justify" width="720">
      <v-card-title class="secondary fontLight--text"
        >Parcel Code
      </v-card-title>
      <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
      <v-card-text class="pa-2">
        <scan-code
          :enable="enable"
          label="Code"
          :icon="Parcel"
          @onScanCode="onScanCodeHandler"
        ></scan-code>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import ScanCode from "../ui/ScanCode";
import validation from "../../mixins/validation";

import Parcel from "../../assets/Icons/Parcel/Parcel_Green.svg";

export default {
  name: "ParcelCodeCheckIn",
  props: { enable: { default: false, type: Boolean } },
  mixins: [validation],
  components: { ScanCode },
  data() {
    return {
      valid: true,
      Parcel: Parcel,
      courier: {
        name: "",
        password: "",
      },
    };
  },

  methods: {
    onScanCodeHandler(data) {
      this.$emit("onParcelCode", { code: data });
    },
  },
};
</script>

<style scoped></style>
