<template>
  <v-container class="px-16 py-10">
    <v-row no-gutters class="px-16">
      <v-col>
        <v-card v-ripple @click="onCheckInHandler" class="option rounded-lg">
          <v-img height="350" :src="CheckIn" contain> </v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="brownLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-package-variant-closed</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Check-In</v-card-title
          >
          <v-card-text class="secondary fontLight--text"
            >Rider area for depositing parcels.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card v-ripple @click="onCheckOutHandler" class="option rounded-lg">
          <v-img height="350" :src="CheckOut" contain></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="brownLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-package-variant</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Check-Out
          </v-card-title>
          <v-card-text class="secondary fontLight--text"
            >Client area for withdrawing parcels.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-ripple
          @click="onLockerStatusHandler"
          class="option rounded-lg"
        >
          <v-img height="350" :src="PadLock" contain></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="brownLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-locker</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Locker Viewer
          </v-card-title>
          <v-card-text class="secondary fontLight--text"
            >Check the status of each locker.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-ripple
          @click="onTransactionHandler"
          class="option rounded-lg"
        >
          <v-img height="350" :src="Transaction" contain></v-img>
          <v-card-text style="position: absolute">
            <v-fab-transition>
              <v-btn color="brownLight" dark absolute top right fab x-large>
                <v-icon x-large>mdi-text-box</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>

          <v-card-title class="secondary fontLight--text">
            Transactions
          </v-card-title>
          <v-card-text class="secondary fontLight--text"
            >Check previous transactions made.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckIn from "../assets/Icons/CheckIn/CheckIn_Green-01.svg";
import CheckOut from "../assets/Icons/CheckOut/CheckOut_Green.svg";
import PadLock from "../assets/Icons/Lock/Lock_Green.svg";
import Transaction from "../assets/Icons/Transaction/Transact_Green.svg";

export default {
  name: "HomeView",
  data() {
    return {
      CheckIn: CheckIn,
      CheckOut: CheckOut,
      PadLock: PadLock,
      Transaction: Transaction,
    };
  },
  methods: {
    async onCheckInHandler() {
      this.$router.push("/check-in").catch(() => {});
    },
    async onCheckOutHandler() {
      this.$router.push("/check-out").catch(() => {});
    },
    async onLockerStatusHandler() {
      this.$router.push("/locker-viewer").catch(() => {});
    },
    async onTransactionHandler() {
      this.$router.push("/transaction-viewer").catch(() => {});
    },
  },
};
</script>

<style scoped>
.option {
  margin-inline: 1rem;
}
</style>
