<template>
  <v-stepper v-model="stepState" dark flat class="transparent">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="stepState > 1" step="1">
        <label :class="getClass(1)">Pick-Up Code</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 2" step="2">
        <label :class="getClass(2)">Parcel Details</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 3" step="3">
        <label :class="getClass(3)">Enter One-Time-Pin</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 4" step="4">
        <label :class="getClass(4)">Checking Locker</label>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="stepState > 5" step="5">
        <label :class="getClass(5)">Completed</label>
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row>
          <v-col>
            <CheckOutCode
              @onParcelCode="onParcelCodeHandler"
              :enable="stepState == 1"
            ></CheckOutCode>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <CheckOutDetails></CheckOutDetails>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onParcelDetailsHandler()"
              x-large
              light
            >
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-row>
          <v-col>
            <CheckOutOtp
              @onParcelOtp="onParcelOtpHandler()"
              :enable="stepState == 3"
            ></CheckOutOtp>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onResendOtpHandler()"
              x-large
              light
            >
              Resend One-Time-Pin
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row>
          <v-col>
            <CheckOutLocker :enable="stepState == 4"></CheckOutLocker>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn
              class="title"
              color="primary--text"
              @click="onByPassHandler"
              x-large
              light
            >
              By Pass
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn
              :disabled="!passed"
              class="title"
              color="primary--text"
              @click="onParcelCheckOutLocker()"
              x-large
              light
            >
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-row>
          <v-col>
            <CheckOutCompleted :enable="stepState == 5"></CheckOutCompleted>
          </v-col>
        </v-row>
        <v-row><v-col></v-col></v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CheckOutCode from "./components/CheckOutCode";
import CheckOutDetails from "./components/CheckOutDetails";
import CheckOutOtp from "./components/CheckOutOtp";
import CheckOutLocker from "./components/CheckOutLocker";
import CheckOutCompleted from "./components/CheckOutCompleted";
import { mapActions, mapGetters } from "vuex";

import ssoApi from "@/api/ssoApi";

export default {
  name: "Stepper",
  components: {
    CheckOutCode,
    CheckOutDetails,
    CheckOutOtp,
    CheckOutCompleted,
    CheckOutLocker,
  },
  mounted() {
    this.stepState = 1;
  },
  data() {
    return {
      stepState: 0,
    };
  },
  computed: {
    ...mapGetters("locker", ["passed"]),
    ...mapGetters("verification", ["pickupCode"]),
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
    ...mapActions("dialog", ["setError", "setInfo"]),
    ...mapActions("verification", ["setMessageId", "setOrderId"]),

    onParcelCodeHandler() {
      this.stepState = 2;
    },

    onParcelDetailsHandler() {
      this.stepState = 3;
    },

    onParcelOtpHandler() {
      this.stepState = 4;
    },

    onResendOtpHandler() {
      this.setLoading({ visible: true });
      ssoApi
        .checkOutParcel({ code: this.pickupCode })
        .then((response) => {
          const { order, messageId, message } = response.data.data;

          this.setInfo({
            visible: true,
            messages: [message],
          });

          this.setOrder(order);

          let locker = { ...order.locker };
          locker.boardNumber = order.locker.board.number;
          this.setLocker(locker);

          this.setMessageId(messageId);
          this.setOrderId(order.id);
        })
        .finally(() => {
          this.setLoading({ visible: false });
        });
    },

    onParcelCheckOutLocker() {
      this.stepState = 5;
    },

    onByPassHandler() {
      this.onParcelCheckOutLocker();
    },

    getClass(state) {
      if (state == this.stepState) return "font-medium";
      else return "";
    },
  },
};
</script>

<style scoped>
.stepper {
  background-color: rgba(0, 0, 0, 0.5);
}

/* .stepper:active {
  background-color: rgba(256, 0, 0, 0.5);
} */
</style>
