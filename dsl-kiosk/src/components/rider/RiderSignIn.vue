<template>
  <v-card light class="ma-auto justify" width="720">
    <v-card-title class="secondary fontLight--text"
      >Rider (Sign In)
    </v-card-title>
    <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
    <v-card-text class="ma-0 pa-0">
      <input-login
        :enable="enable"
        label1="Rider Id"
        label2="Rider Pin"
        :icon="Courier"
        @onOk="onOkHandler"
      ></input-login>
    </v-card-text>
    <v-card-actions class="secondary">
      <v-spacer></v-spacer><v-btn text large></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import InputLogin from "../ui/InputLogin";
import Courier from "../../assets/Icons/Courier/Courier_Green.svg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "RiderSignIn",
  props: { enable: { default: false, type: Boolean } },
  components: { InputLogin },

  data() {
    return {
      Courier: Courier,
    };
  },

  methods: {
    ...mapActions("loading", ["setLoading"]),
    ...mapActions("dialog", ["setError"]),

    ...mapActions("rider", ["fetchByIdPin"]),
    ...mapActions("rider", ["fetchByIdPin"]),

    async onOkHandler(riderId, riderPin) {
      if (!riderId || !riderPin) {
        this.setError({
          visible: true,
          messages: ["Rider Id or Pin must not be empty!"],
        });
        return;
      }

      this.setLoading({ visible: true });

      await this.fetchByIdPin({
        id: riderId,
        pin: riderPin,
      });

      this.setLoading({ visible: false });
    },
  },
  computed: {
    ...mapGetters("rider", ["rider"]),
  },
};
</script>

<style scoped></style>
