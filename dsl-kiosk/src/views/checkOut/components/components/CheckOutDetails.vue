<template>
  <BaseSheet scrollable custom-class="text-h4" v-if="order">
    <v-row dense>
      <v-col cols="4">
        <label>Order Id</label>
      </v-col>
      <v-col>{{ order.id }}</v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <label>Customer Mobile</label>
      </v-col>
      <v-col>{{ order.customerMobileNumber }}</v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">Size</v-col>
      <v-col>
        <v-row>
          <v-col>
            <label>Length: {{ order.parcelLength }}cm </label>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Width: {{ order.parcelWidth }}cm </label>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Height: {{ order.parcelHeight }}cm </label>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <label>Size Category</label>
      </v-col>
      <v-col>
        <label>{{ order.lockerSizeCode }} </label>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">Created At</v-col>
      <v-col>
        <label>{{ toStringDate(order.createdAt) }}</label>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">Updated At</v-col>
      <v-col>
        <label>{{ toStringDate(order.updatedAt) }}</label>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">Price</v-col>
      <v-col>{{ order.price }}</v-col>
    </v-row>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";

import { mapGetters } from "vuex";

export default {
  name: "CheckOutDetails",
  components: { BaseSheet },
  computed: {
    ...mapGetters("order", ["order"]),
  },
  methods: {
    toStringDate(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<style scoped></style>
