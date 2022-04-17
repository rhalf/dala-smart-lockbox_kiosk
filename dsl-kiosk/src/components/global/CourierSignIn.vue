<template>
  <v-card light class="ma-auto" width="480">
    <v-card-title class="secondary fontLight--text">Courier</v-card-title>
    <v-card-subtitle class="secondary fontLight--text">
      Please login your courier account
    </v-card-subtitle>
    <v-container class="py-6 px-12">
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="courier.name"
              label="Account Name"
              type="text"
              :rules="validateName"
              required
            ></v-text-field>
            <v-text-field
              v-model="courier.password"
              label="Account Password"
              type="password"
              :rules="validatePassword"
              required
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions class="secondary">
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn class="primary--text" @click="loginHandler">Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

import validation from "../../mixins/validation";

export default {
  name: "CourierSignIn",
  props: {},
  mixins: [validation],
  data() {
    return {
      valid: false,

      courier: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["setLoadingSpinner"]),

    loginHandler() {
      this.setLoadingSpinner({ visible: true });
      this.timeout = setTimeout(() => {
        this.setLoadingSpinner({ visible: false });
        this.$emit("onCourier", "onCourier");
      }, 500);
    },
  },
};
</script>

<style scoped></style>
