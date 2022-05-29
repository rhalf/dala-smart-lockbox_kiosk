<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-img
            class="mx-auto"
            aspect-ratio="1"
            :src="icon"
            max-width="270"
            max-height="270"
            contain
          ></v-img>
        </v-row>
        <v-row>
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
  </v-container>
</template>

<script>
import NumPad from "../ui/NumPad";

export default {
  name: "InputLogin",
  props: {
    enable: Boolean,
    label1: String,
    icon: String,
  },
  components: { NumPad },
  data() {
    return {
      selected: 1,
      input: null,
      input1: "",
      regex: /\s/g,
    };
  },
  methods: {
    onKeyPressHandler(key) {
      if (this.input1) this.input1 += key;
      else this.input1 = key;
    },

    onDelHandler() {
      if (this.input1) this.input1 = this.input1.toString().slice(0, -1);
    },

    onOkHandler() {
      this.$emit("onOk", this.input1);
    },
  },
};
</script>
