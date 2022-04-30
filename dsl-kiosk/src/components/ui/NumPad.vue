<template>
  <v-row>
    <v-col cols="4" v-for="key in keys" v-bind:key="key">
      <v-btn x-large class="headline primary" @click="onClickHandler(key)">{{
        key
      }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Del", "0", "Ok"],
    };
  },
  methods: {
    onClickHandler(key) {
      let newString = this.value;

      if (!newString) newString = "";

      if (key == "Del") {
        this.updateInput(newString.slice(0, -1));
        return;
      }
      if (key == "Ok") {
        this.$emit("onDone", newString);
        return;
      }

      if ("0123456789".includes(key)) {
        newString = newString + key;
        this.updateInput(newString);
      }
    },

    updateInput(newString) {
      this.$emit("input", newString);
    },
  },
};
</script>

<style></style>
