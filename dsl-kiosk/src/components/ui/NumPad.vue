<template>
  <v-row no gutters>
    <v-col cols="4" v-for="key in keys" v-bind:key="key" class="text-center">
      <v-btn
        x-large
        class="display-1 primary"
        @click="onClickHandler(key)"
        height="60"
        >{{ key }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "0", "Ok"],
    };
  },
  methods: {
    onClickHandler(key) {
      if (key == "X") {
        this.$emit("onDel");
        return;
      }
      if (key == "Ok") {
        this.$emit("onOk");
        return;
      }

      if ("0123456789".includes(key)) {
        this.$emit("onKeyPress", key);
      }
    },
  },
};
</script>

<style></style>
