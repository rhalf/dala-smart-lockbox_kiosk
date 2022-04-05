<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          v-ripple
          @click="$router.push('/deposit').catch(() => {})"
          class="option rounded-lg"
        >
          <v-img aspect-ratio="1" :src="CheckIn" height="200" contain></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="greenLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-package-variant-closed</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Deposit Parcel</v-card-title
          >
          <v-card-text class="secondary fontLight--text"
            >Courier area for depositing parcels.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-ripple
          @click="$router.push('/withdraw').catch(() => {})"
          class="option rounded-lg"
        >
          <v-img aspect-ratio="1" :src="CheckOut" height="200" contain></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="greenLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-package-variant</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Withdraw Parcel
          </v-card-title>
          <v-card-text class="secondary fontLight--text"
            >Client area for withdrawing parcels.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import locker from "../../api/splLockerApi";
import CheckIn from "../assets/Icons/CheckIn/CheckIn_Green-01.png";
import CheckOut from "../assets/Icons/CheckOut/CheckOut_Green-01.png";

export default {
  name: "HomeView",
  // mixins: [locker],
  data() {
    return {
      CheckIn: CheckIn,
      CheckOut: CheckOut,
    };
  },
};
</script>

<style scoped>
.option {
  margin-inline: 1.5rem;
}
</style>
