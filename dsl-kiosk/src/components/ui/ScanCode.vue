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
          <v-text-field
            v-model="code"
            outlined
            clearable
            class="headline px-3"
            :label="label"
            :placeholder="`Enter ${label} manually`"
            height="60"
            @blur="inputState = false"
            @focus="inputState = true"
          ></v-text-field>
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
  name: "ScanCode",
  props: {
    enable: Boolean,
    label: String,
    icon: String,
  },
  components: { NumPad },
  //   created() {
  //     window.addEventListener("keydown", this.keyDownHandler);
  //   },
  // mounted() {
  //   this.$nextTick(() => this.$refs.courierCode.focus());
  // },
  data() {
    return {
      code: null,
      inputState: false,
      regex: /\s/g,
    };
  },
  methods: {
    keyDownHandler(e) {
      if (e.key == "Enter") {
        e.preventDefault();
        this.$emit("onScanCode", this.code.toString().replace(this.regex, ""));
        // this.code = null;
      } else if (e.key == "Shift" || e.key == "Ctrl" || e.key == "Alt") {
        return;
      } else {
        if (this.code == null) this.code = e.key;
        else this.code = this.code + e.key;
      }
    },
    onDoneHandler(code) {
      this.$emit("onScanCode", code.toString().replace(this.regex, ""));
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
