<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-img
            class="mx-auto"
            aspect-ratio="1"
            :src="icon"
            max-width="220"
            max-height="220"
            contain
          ></v-img>
        </v-row>
        <v-row>
          <v-otp-input
            class="pa-2"
            length="6"
            type="number"
            height="60"
            light
            v-model="code"
          ></v-otp-input>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col><num-pad v-model="code" @onDone="onDoneHandler"></num-pad></v-col>
    </v-row>
  </v-container>
</template>

<script>
import NumPad from "../ui/NumPad";

export default {
  name: "OtpCode",
  props: {
    enable: Boolean,
    label: String,
    icon: String,
  },
  components: { NumPad },
  data() {
    return {
      code: null,
      inputState: false,
      regex: /\s/g,
    };
  },
  methods: {},
};
</script>

<style>
.otp-field-box--0 {
  font-size: 50px !important;
  max-height: 64px !important;
}
.otp-field-box--1 {
  font-size: 50px !important;
  max-height: 64px !important;
}
.otp-field-box--2 {
  font-size: 50px !important;
  max-height: 64px !important;
}
.otp-field-box--3 {
  font-size: 50px !important;
  max-height: 64px !important;
}
.otp-field-box--4 {
  font-size: 50px !important;
  max-height: 64px !important;
}
.otp-field-box--5 {
  font-size: 50px !important;
  max-height: 64px !important;
}
</style>
