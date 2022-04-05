<template>
  <v-container>
    <!-- <v-row>
      <v-col>
        <label class="display-1 fontLight--text">Deposit</label>
      </v-col>
    </v-row> -->
    <v-row>
      <v-slide-x-reverse-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-reverse-transition>
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
  width: 40rem;
  margin: 2rem;
}
</style>
