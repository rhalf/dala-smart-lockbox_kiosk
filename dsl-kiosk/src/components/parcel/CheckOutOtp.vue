<template>
  <BaseSheet scrollable>
    <BaseOtpNumber
      :enable="enable"
      label="Otp Code"
      placeholder="Enter otp code."
      :icon="Otp"
      @onOk="onOkHandler"
    ></BaseOtpNumber>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import BaseOtpNumber from "@/components/common/BaseOtpNumber";
import Otp from "@/assets/Elements/Mail/Mail_Green.svg";
import { mapGetters, mapActions } from "vuex";

import ssoApi from "@/api/ssoApi";

export default {
  name: "CheckOutOtp",
  props: { enable: Boolean },
  components: { BaseSheet, BaseOtpNumber },
  data() {
    return {
      Otp: Otp,
    };
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),

    async onOkHandler(code) {
      if (code) {
        this.setLoading({ visible: true });
        ssoApi
          .verifyCheckoutParcel({
            otpNumber: code,
            messageId: this.messageId,
            orderId: this.orderId,
          })
          .then((response) => {
            //this.setLocker(this.order.locker);
            const { success } = response.data;

            if (success) this.$emit("onParcelOtp");
          })
          .finally(() => {
            this.setLoading({ visible: false });
          });
      }
    },
  },
  computed: {
    // ...mapGetters("order", ["order"]),
    ...mapGetters("verification", ["depositCode", "orderId", "messageId"]),
  },
};
</script>
