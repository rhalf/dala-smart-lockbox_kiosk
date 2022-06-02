<template>
  <v-sheet height="450" class="transparent">
    <v-card light class="ma-auto justify" width="720">
      <v-card-title class="secondary fontLight--text"
        >Pickup Code
      </v-card-title>
      <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
      <v-card-text class="pa-2">
        <input-number
          :enable="enable"
          label1="Code"
          :icon="Parcel"
          @onOk="onOkHandler"
        ></input-number>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import InputNumber from "../ui/InputNumber";
import Parcel from "../../assets/Icons/Parcel/Parcel_Green.svg";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CheckOutCode",
  props: { enable: { default: false, type: Boolean } },
  mixins: [],
  components: { InputNumber },
  data() {
    return {
      Parcel: Parcel,
    };
  },

  methods: {
    ...mapActions("dialog", ["setError"]),
    ...mapActions("dialog", ["setInfo"]),
    ...mapActions("otp", ["fetchOtp"]),
    ...mapActions("loading", ["setLoading"]),
    async onOkHandler(id) {
      if (!id) {
        this.setError({
          visible: true,
          message: ["Pickup code must not be empty!"],
        });
        return;
      }

      this.setLoading({ visible: true });
      const response = await this.fetchOtp({ code: id });
      if (response) {
        this.setInfo({
          visible: true,
          messages: [response.data.data.message],
        });
        this.$emit("onParcelCode");
      }
      this.setLoading({ visible: false });
    },
  },
  computed: {
    ...mapGetters("order", ["order"]),
  },
};
</script>

<style scoped></style>
