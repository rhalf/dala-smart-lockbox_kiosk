<template>
  <BaseSheet scrollable>
    <BaseInputNumber
      :enable="enable"
      label="Deposit Code"
      placeholder="Enter deposit code."
      :icon="Parcel"
      @onOk="onOkHandler"
    ></BaseInputNumber>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import BaseInputNumber from "@/components/common/BaseInputNumber";
import Parcel from "@/assets/Icons/Parcel/Parcel_Green.svg";
import { mapActions, mapGetters } from "vuex";

import ssoApi from "@/api/ssoApi";

export default {
  name: "CheckInCode",
  props: { enable: Boolean },
  components: { BaseInputNumber, BaseSheet },
  data() {
    return {
      Parcel: Parcel,
    };
  },

  methods: {
    ...mapActions("dialog", ["setError"]),
    ...mapActions("order", ["readOrder", "setOrder"]),
    ...mapActions("loading", ["setLoading"]),

    onOkHandler(id) {
      if (!id) {
        this.setError({
          visible: true,
          messages: ["Parcel code must not be empty!"],
        });
        return;
      }

      this.setLoading({ visible: true });
      ssoApi
        .readOrder({ code: id })
        .then((response) => {
          // console.log(response);
          this.setOrder(response.data);
          this.$emit("onParcelCode");
        })
        .finally(() => {
          this.setLoading({ visible: false });
        });
    },
  },
  computed: {
    ...mapGetters("order", ["order"]),
  },
};
</script>

<style scoped></style>
