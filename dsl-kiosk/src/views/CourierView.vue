<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <v-card>
          <v-card-title class="secondary fontLight--text">Courier</v-card-title>
          <v-card-subtitle class="secondary fontLight--text">
            Please login your courier account
          </v-card-subtitle>
          <v-container class="py-6 px-12">
            <v-row>
              <v-col>
                <v-form>
                  <v-text-field label="Account Name" type="text"></v-text-field>
                  <v-text-field
                    label="Account Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row> -->
            <!-- <v-row>
              <v-col class="text-center">
                <v-btn class="primary">Scan</v-btn>
              </v-col>
            </v-row> -->
          </v-container>
          <v-card-actions class="secondary">
            <v-container>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <v-btn class="primary--text">Login</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
// import locker from "../../api/splLockerApi";
import CheckIn from "../assets/Icons/CheckIn/CheckIn_Green-01.png";
import CheckOut from "../assets/Icons/CheckOut/CheckOut_Green-01.png";

export default {
  name: "CourierView",
  // mixins: [locker],
  data() {
    return {
      CheckIn: CheckIn,
      CheckOut: CheckOut,
    };
  },
};
</script>

<style scoped></style>
