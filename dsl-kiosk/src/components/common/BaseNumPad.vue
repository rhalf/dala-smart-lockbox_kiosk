<template>
  <div :class="classes">
    <v-row>
      <v-col
        cols="4"
        v-for="key in keys"
        v-bind:key="key.value"
        class="text-center"
      >
        <v-btn
          x-large
          class="display-1 primary"
          @click="onClickHandler(key)"
          height="60"
        >
          <v-icon x-large v-if="key.icon">{{ key.icon }}</v-icon>
          <span v-if="!key.icon">{{ key.value }}</span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import customClass from "@/mixins/custom-class.js";

export default {
  mixins: [customClass],
  data() {
    return {
      keys: [
        { value: "1", icon: null },
        { value: "2", icon: null },
        { value: "3", icon: null },
        { value: "4", icon: null },
        { value: "5", icon: null },
        { value: "6", icon: null },
        { value: "7", icon: null },
        { value: "8", icon: null },
        { value: "9", icon: null },
        { value: "X", icon: "mdi-arrow-left-bold" },
        { value: "0", icon: null },
        { value: "OK", icon: null },
      ],
    };
  },
  methods: {
    onClickHandler(key) {
      if (key.value == "X") {
        this.$emit("onDel");
        return;
      }
      if (key.value == "OK") {
        this.$emit("onOk");
        return;
      }

      if ("0123456789".includes(key.value)) {
        this.$emit("onKeyPress", key.value);
      }
    },
  },
};
</script>

<style></style>
