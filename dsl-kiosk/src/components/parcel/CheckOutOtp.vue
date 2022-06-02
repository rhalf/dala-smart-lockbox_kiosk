<template>
  <v-sheet height="450" class="transparent">
    <v-card light class="ma-auto justify" width="720">
      <v-card-title class="secondary fontLight--text">Parcel OTP </v-card-title>
      <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
      <v-card-text class="pa-2">
        <otp-code
          :enable="enable"
          label="Code"
          :icon="Otp"
          @onOk="onOkHandler"
        ></otp-code>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import OtpCode from "../../components/ui/OtpCode";
import Otp from "../../assets/Elements/Mail/Mail_Green.svg";
import { mapActions } from "vuex";
import order from "@/store/modules/order";
export default {
  name: "CheckOutOtp",
  props: { enable: Boolean },
  components: { OtpCode },
  data() {
    return {
      Otp: Otp,
    };
  },
  methods: {
    onOkHandler() {
      this.$emit("onParcelOtp");
    },
    sendOtp() {
      this.getLockerOrder({ code: order });
    },
  },
  computed: {
    ...mapActions("order", ["order"]),
    ...mapActions("locker", ["getLockerOrder"]),
  },
  watch: {
    enable(present, previous) {
      if (previous == false && present != previous) {
        this.sendOtp();
      }
    },
  },
};
</script>
