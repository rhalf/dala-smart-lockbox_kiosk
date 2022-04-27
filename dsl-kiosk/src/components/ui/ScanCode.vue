<template>
  <v-card light class="ma-auto justify" width="480">
    <v-card-title class="secondary fontLight--text">Code Scan</v-card-title>
    <v-card-subtitle class="secondary fontLight--text"></v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <v-img
            class="mx-auto my-5"
            aspect-ratio="1"
            :src="QrCode"
            max-width="150"
            max-height="150"
            contain
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="code"
            outlined
            class="px-10"
            label="Code"
            placeholder="Enter code manually"
            clearable
            @blur="inputState = false"
            @focus="inputState = true"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- <v-card-actions class="secondary">
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn class="primary--text" @click="enterCodeHandler">Enter</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import QrCode from "../../assets/Extra/qrcode.svg";

export default {
  name: "CodeScan",
  props: {
    enable: Boolean,
  },
  //   created() {
  //     window.addEventListener("keydown", this.keyDownHandler);
  //   },
  // mounted() {
  //   this.$nextTick(() => this.$refs.courierCode.focus());
  // },
  data() {
    return {
      code: null,
      QrCode: QrCode,
      inputState: false,
    };
  },
  methods: {
    keyDownHandler(e) {
      if (e.key == "Enter") {
        e.preventDefault();
        var regex = /\s/g;
        this.$emit("onScanCode", this.code.toString().replace(regex, ""));
        // this.code = null;
      } else if (e.key == "Shift" || e.key == "Ctrl" || e.key == "Alt") {
        return;
      } else {
        if (this.code == null) this.code = e.key;
        else this.code = this.code + e.key;
      }
    },
  },

  watch: {
    inputState() {
      if (this.enable && !this.inputState) {
        window.addEventListener("keydown", this.keyDownHandler);
      } else {
        window.removeEventListener("keydown", this.keyDownHandler);
      }
    },
    enable() {
      if (this.enable && !this.inputState) {
        window.addEventListener("keydown", this.keyDownHandler);
      } else {
        window.removeEventListener("keydown", this.keyDownHandler);
      }
    },
  },
};
</script>
