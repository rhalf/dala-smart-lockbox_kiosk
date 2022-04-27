<template>
  <v-sheet height="450" class="transparent">
    <v-container>
      <v-row>
        <v-col class="text-center headline">
          <label> Please enter your OTP (One Time Pin).</label>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-otp-input length="6" type="number" height="80" light></v-otp-input>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-btn class="grey" light>
            <v-icon left>mdi-trash-can</v-icon> Clear
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn class="grey" light>
            <v-icon left>mdi-refresh</v-icon> Resend
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import validation from "../../mixins/validation";
export default {
  name: "ParcelOtp",
  props: {},
  mixins: [validation],
  components: {},
  data() {
    return {
      valid: true,
      courier: {
        name: "",
        password: "",
      },
    };
  },

  methods: {},
};
</script>

<style scoped></style>
