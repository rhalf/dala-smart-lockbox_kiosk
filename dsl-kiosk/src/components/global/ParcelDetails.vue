<template>
  <v-sheet height="450" class="transparent headline">
    <v-container>
      <v-row>
        <v-col cols="3">
          <label>Parcel Barcode</label>
        </v-col>
        <v-col>231635165151651</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Parcel Name</v-col>
        <v-col
          >Motorcycle handlebar handle cover, 2-piece, for bmw r1200gs lc,
          anti-vibration, foam, cover accessories</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="3">Merchant</v-col>
        <v-col>superengine8.ph</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Size</v-col>
        <v-col>XS</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Price</v-col>
        <v-col>₱88.00</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Receiver</v-col>
        <v-col>Juan Dela Cruz</v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "ParcelDetails",
  props: {},
  data() {
    return {
      valid: true,
      courier: {
        name: "",
        password: "",
      },
    };
  },

  methods: {
    onScanCodeHandler(data) {
      this.$emit("onParcelDetails", { code: data });
    },
  },
};
</script>

<style scoped></style>
