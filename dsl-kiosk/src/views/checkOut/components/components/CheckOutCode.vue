<template>
  <BaseSheet scrollable>
    <BaseInputNumber
      :enable="enable"
      label="Pick-Up Code"
      placeholder="Enter pick-up code."
      :icon="Parcel"
      @onOk="onOkHandler"
    ></BaseInputNumber>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import Parcel from "@/assets/Icons/Parcel/Parcel_Green.svg";
import BaseInputNumber from "@/components/common/BaseInputNumber";
import { mapActions } from "vuex";

import ssoApi from "@/api/ssoApi";

export default {
  name: "CheckOutCode",
  props: { enable: Boolean },
  mixins: [],
  components: { BaseSheet, BaseInputNumber },
  data() {
    return {
      Parcel: Parcel,
    };
  },

  methods: {
    ...mapActions("dialog", ["setError", "setInfo"]),
    ...mapActions("order", ["setOrder"]),
    ...mapActions("loading", ["setLoading"]),
    ...mapActions("verification", [
      "setPickupCode",
      "setMessageId",
      "setOrderId",
    ]),
    ...mapActions("locker", ["setLocker"]),
    async onOkHandler(id) {
      if (!id) {
        this.setError({
          visible: true,
          messages: ["Pickup code must not be empty!"],
        });
        return;
      }

      this.setPickupCode(id);

      this.setLoading({ visible: true });
      ssoApi
        .checkOutParcel({ code: id })
        .then((response) => {
          const { order, messageId, message } = response.data.data;

          this.setInfo({
            visible: true,
            messages: [message],
          });
          this.$emit("onParcelCode");

          this.setOrder(order);

          // let locker = { ...order.locker };
          // locker.boardNumber = order.locker.board.number;
          // this.setLocker(locker);

          this.setMessageId(messageId);
          this.setOrderId(order.id);
        })
        .finally(() => {
          this.setLoading({ visible: false });
        });
    },
  },
};
</script>

<style scoped></style>
