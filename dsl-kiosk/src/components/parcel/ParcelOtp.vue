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
          @onScanCode="onScanCodeHandler"
        ></otp-code>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import validation from "../../mixins/validation";
import OtpCode from "../../components/ui/OtpCode";
import Otp from "../../assets/Elements/Mail/Mail_Green.svg";
export default {
  name: "ParcelOtp",
  props: {},
  mixins: [validation],
  components: { OtpCode },
  data() {
    return {
      Otp: Otp,
      courier: {
        name: "",
        password: "",
      },
    };
  },

  methods: {},
};
</script>
