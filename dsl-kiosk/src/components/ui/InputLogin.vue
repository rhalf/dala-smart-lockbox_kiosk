<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-img
            class="mx-auto"
            aspect-ratio="1"
            :src="icon"
            max-width="180"
            max-height="180"
            contain
          ></v-img>
        </v-row>
        <v-row class="">
          <v-text-field
            v-model="input1"
            outlined
            clearable
            class="headline px-10"
            :label="label1"
            :placeholder="`Please enter ${label1}.`"
            height="40"
            @focus="selected = 1"
          ></v-text-field>
          <v-text-field
            v-model="input2"
            type="password"
            outlined
            clearable
            class="headline px-10"
            :label="label2"
            :placeholder="`Please enter ${label2}`"
            height="40"
            @focus="selected = 2"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col
        ><num-pad
          @onOk="onOkHandler"
          @onDel="onDelHandler"
          @onKeyPress="onKeyPressHandler"
        ></num-pad
      ></v-col>
    </v-row>
    <!-- <v-bottom-sheet v-model="sheet" hide-overlay>
      <SimpleKeyboard
        @onChange="onChange"
        @onKeyPress="onKeyPress"
        :input="input"
      />
    </v-bottom-sheet> -->
  </v-container>
</template>

<script>
// import SimpleKeyboard from "./SimpleKeyboard";

import NumPad from "../ui/NumPad";

export default {
  name: "InputLogin",
  props: {
    enable: Boolean,
    label1: String,
    label2: String,
    icon: String,
  },
  components: { NumPad },
  created() {},
  //   created() {
  //     window.addEventListener("keydown", this.keyDownHandler);
  //   },
  // mounted() {
  //   this.$nextTick(() => this.$refs.courierCode.focus());
  // },
  data() {
    return {
      sheet: true,
      selected: 1,
      input: null,
      input1: "",
      input2: "",
      inputState: false,
      regex: /\s/g,
    };
  },
  methods: {
    // keyDownHandler(e) {
    //   if (e.key == "Enter") {
    //     e.preventDefault();
    //     this.$emit("onScanCode", this.code.toString().replace(this.regex, ""));
    //     // this.code = null;
    //   } else if (e.key == "Shift" || e.key == "Ctrl" || e.key == "Alt") {
    //     return;
    //   } else {
    //     if (this.code == null) this.code = e.key;
    //     else this.code = this.code + e.key;
    //   }
    // },
    onKeyPress(button) {
      if (this.selected == 1) {
        this.input1 += button;
      }
      if (this.selected == 2) {
        this.input2 += button;
      }
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },

    onKeyPressHandler(key) {
      // console.log("numPad:", key);
      if (this.selected == 1) {
        if (this.input1) this.input1 += key;
        else this.input1 = key;
      }
      if (this.selected == 2) {
        if (this.input2) this.input2 += key;
        else this.input2 = key;
      }
    },

    onDelHandler() {
      console.log("onDelHandler");
      if (this.selected == 1) {
        if (this.input1) this.input1 = this.input1.toString().slice(0, -1);
      }
      if (this.selected == 2) {
        if (this.input2) this.input2 = this.input2.toString().slice(0, -1);
      }
    },
    onOkHandler() {
      // if (this.selected == 1) {
      //   console.log("onOkHandler", 1);
      // }
      // if (this.selected == 2) {
      //   console.log("onOkHandler", 2);
      // }
      this.$emit("onOk", this.input1, this.input2);
    },
  },

  watch: {
    // inputState() {
    //   if (this.enable && !this.inputState) {
    //     window.addEventListener("keydown", this.keyDownHandler);
    //   } else {
    //     window.removeEventListener("keydown", this.keyDownHandler);
    //   }
    // },
    // enable() {
    //   if (this.enable && !this.inputState) {
    //     window.addEventListener("keydown", this.keyDownHandler);
    //   } else {
    //     window.removeEventListener("keydown", this.keyDownHandler);
    //   }
    // },
  },
};
</script>
