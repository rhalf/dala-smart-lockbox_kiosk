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
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions("locker", ["setLocker"]),
    ...mapActions("otp", ["verifyOtp"]),
    ...mapActions("loading", ["setLoading"]),

    async onOkHandler(code) {
      if (code) {
        this.setLoading({ visible: true });
        const response = await this.verifyOtpHandler(code);
        if (response) {
          this.setLocker(this.order.locker);
        }
        this.setLoading({ visible: false });

        if (response) this.$emit("onParcelOtp");
      }
    },
    verifyOtpHandler(code) {
      return this.verifyOtp({
        otpNumber: code,
        messageId: this.otp.messageId,
        orderId: this.order.id,
      });
    },
  },
  computed: {
    ...mapGetters("order", ["order"]),
    ...mapGetters("otp", ["otp"]),
  },
};
</script>
