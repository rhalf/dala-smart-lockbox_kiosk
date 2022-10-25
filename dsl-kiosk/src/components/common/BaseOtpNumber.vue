<template>
  <v-card light class="ma-auto justify" width="720">
    <v-card-title class="secondary fontLight--text"> {{ label }} </v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <div class="pa-5">
            <v-row>
              <v-col>
                <v-img
                  class="mx-auto"
                  :aspect-ratio="30 / 21"
                  :src="icon"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-otp-input
                  class="pa-0 ma-0"
                  length="6"
                  type="number"
                  height="75"
                  light
                  v-model="code"
                  @keypress="keypress"
                  hide-details="auto"
                ></v-otp-input>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <BaseNumPad
            custom-class="pa-5"
            @onKeyPress="onKeyPressHandler"
            @onOk="onOkHandler"
            @onDel="onDelHandler"
          >
          </BaseNumPad>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import BaseNumPad from "./BaseNumPad";
export default {
  name: "OtpCode",
  props: {
    enable: Boolean,
    label: String,
    icon: String,
  },
  components: { BaseNumPad },
  data() {
    return {
      code: null,
    };
  },
  methods: {
    onKeyPressHandler(key) {
      if (this.code) if (String(this.code).length >= 6) return;

      if (this.code) this.code += key;
      else this.code = key;
    },

    onDelHandler() {
      if (this.code) this.code = this.code.toString().slice(0, -1);
    },

    onOkHandler() {
      this.$emit("onOk", this.code);
    },

    keypress(e) {
      e.preventDefault();

      if (e.key == "Enter") {
        this.$emit("onOk", this.code);
      } else if ("0123456789".includes(e.key)) {
        if (this.code == null) this.code = e.key;
        else this.code = this.code + e.key;
      }
    },
  },
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
