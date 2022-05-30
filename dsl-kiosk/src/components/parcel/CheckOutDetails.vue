<template>
  <v-sheet height="450" class="transparent headline">
    <v-container v-if="order">
      <v-row>
        <v-col cols="4">
          <label>Order Id</label>
        </v-col>
        <v-col>{{ order.id }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <label>Customer Mobile</label>
        </v-col>
        <v-col>{{ order.customerMobileNumber }}</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">Locker Number</v-col>
        <v-col>
          <label>{{ order.locker.number }} </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <label>Size Code</label>
        </v-col>
        <v-col> {{ order.locker.sizeCode }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">Vendor</v-col>
        <v-col>{{ order.vendor.name }}</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">Rider Name</v-col>
        <v-col>
          <label>{{
            `${order.rider.firstName} ${order.rider.lastName}`
          }}</label>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">Rider Mobile</v-col>
        <v-col>{{ order.rider.mobileNumber }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">Rider Email</v-col>
        <v-col>{{ order.rider.email }}</v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CheckOutDetails",
  computed: {
    ...mapGetters("order", ["order"]),
  },
};
</script>

<style scoped></style>
