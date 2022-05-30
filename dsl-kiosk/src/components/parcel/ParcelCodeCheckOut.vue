<template>
  <v-sheet height="450" class="transparent">
    <v-card light class="ma-auto justify" width="720">
      <v-card-title class="secondary fontLight--text"
        >Parcel Code
      </v-card-title>
      <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
      <v-card-text class="pa-2">
        <input-number
          :enable="enable"
          label1="Code"
          :icon="Parcel"
          @onOk="onOkHandler"
        ></input-number>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import validation from "../../mixins/validation";

import Parcel from "../../assets/Icons/Parcel/Parcel_Green.svg";
import InputNumber from "../ui/InputNumber.vue";

export default {
  name: "ParcelCodeCheckOut",
  props: { enable: { default: false, type: Boolean } },
  mixins: [validation],
  components: { InputNumber },
  data() {
    return {
      Parcel: Parcel,
    };
  },

  methods: {
    onOkHandler() {
      this.$emit("onParcelCode");
    },
  },
};
</script>

<style scoped></style>
