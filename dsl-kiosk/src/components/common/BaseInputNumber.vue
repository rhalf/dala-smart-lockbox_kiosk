<template>
  <v-card light class="ma-auto justify" width="720">
    <v-card-title class="secondary fontLight--text"> {{ label }} </v-card-title>
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
              ref="input1Ref"
              v-model="input1"
              outlined
              clearable
              class="headline px-10"
              :placeholder="placeholder"
              height="40"
              @focus="selected = 1"
            ></v-text-field>
          </v-row>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <num-pad
            @onOk="onOkHandler"
            @onDel="onDelHandler"
            @onKeyPress="onKeyPressHandler"
          >
          </num-pad
        ></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import NumPad from "@/components/ui/NumPad";

export default {
  name: "BaseInputNumber",
  props: {
    enable: Boolean,
    label: String,
    placeholder: String,
    icon: String,
  },
  components: { NumPad },
  data() {
    return {
      selected: 1,
      input: null,
      input1: "",
      input1Ref: null,
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

    keyDownHandler(e) {
      e.preventDefault();

      if (e.key == "Enter") {
        this.$emit("onOk", this.input1);
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
