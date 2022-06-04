<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-img
              class="mx-auto"
              aspect-ratio="1"
              :src="icon"
              max-width="200"
              max-height="200"
              contain
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-otp-input
              length="6"
              type="number"
              height="80"
              light
              v-model="code"
            ></v-otp-input>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <num-pad
          @onKeyPress="onKeyPressHandler"
          @onOk="onOkHandler"
          @onDel="onDelHandler"
        >
        </num-pad>
      </v-col>
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
    };
  },
  methods: {
    onKeyPressHandler(key) {
      if (this.code) if (String(this.code).length == 6) return;

      if (this.code) this.code += key;
      else this.code = key;
    },

    onDelHandler() {
      if (this.code) this.code = this.code.toString().slice(0, -1);
    },

    keyDownHandler(e) {
      e.preventDefault();

      if (e.key == "Enter") {
        this.$emit("onOk", this.code);
      } else if (e.key.length == 1 && String(e.key).match(/[0-9]/g)) {
        if (this.code == null) this.code = e.key;
        else this.code = this.code + e.key;
      }
    },

    onOkHandler() {
      this.$emit("onOk", this.code);
    },
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.$options.name, this.label1);
    window.removeEventListener("keydown", this.keyDownHandler);
  },
  watch: {
    enable(present, previous) {
      if (present && present != previous)
        window.addEventListener("keydown", this.keyDownHandler);
      if (!present && present != previous)
        window.removeEventListener("keydown", this.keyDownHandler);
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
