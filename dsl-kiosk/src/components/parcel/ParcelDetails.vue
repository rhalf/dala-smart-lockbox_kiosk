<template>
  <v-sheet height="450" class="transparent headline">
    <v-container v-if="order">
      <v-row>
        <v-col cols="3">
          <label>Parcel Barcode</label>
        </v-col>
        <v-col>{{ order.id }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Parcel Name</v-col>
        <v-col> {{ order.id }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Vendor</v-col>
        <v-col>{{ order.vendorId }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Size</v-col>
        <v-col>
          <label>{{ order.parcelLength }}cm </label>
          <label>{{ order.parcelWidth }}cm </label>
          <label>{{ order.parcelHeight }}cm </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Price</v-col>
        <v-col>{{ order.id | toPesos }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">Receiver Mobile</v-col>
        <v-col>{{ order.customerMobileNumber }}</v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ParcelDetails",

  computed: {
    ...mapGetters("order", ["order"]),
  },
  methods: {
    onScanCodeHandler(data) {
      this.$emit("onParcelDetails", { code: data });
    },
  },
};
</script>

<style scoped></style>
