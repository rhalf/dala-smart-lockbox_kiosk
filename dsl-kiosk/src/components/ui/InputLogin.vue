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
  data() {
    return {
      sheet: true,
      selected: 1,
      input1: "",
      input2: "",
    };
  },
  methods: {
    onKeyPress(button) {
      if (this.selected == 1) this.input1 += button;
      if (this.selected == 2) this.input2 += button;
    },

    onKeyPressHandler(key) {
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
      if (this.selected == 1) {
        if (this.input1) this.input1 = this.input1.toString().slice(0, -1);
      }
      if (this.selected == 2) {
        if (this.input2) this.input2 = this.input2.toString().slice(0, -1);
      }
    },

    onOkHandler() {
      this.$emit("onOk", this.input1, this.input2);
    },

    keyDownHandler(e) {
      e.preventDefault();

      if (e.key == "Enter") {
        return;
        // this.$emit("onOk", this.input1);
      } else if (e.key.length == 1 && String(e.key).match(/[0-9]/g)) {
        if (this.input1 == null) this.input1 = e.key;
        else this.input1 = this.input1 + e.key;
      }
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
