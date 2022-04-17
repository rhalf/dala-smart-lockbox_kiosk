<template>
  <v-sheet height="450" class="transparent">
    <scan-code :enable="true" @onScanCode="onScanCodeHandler"></scan-code>
  </v-sheet>
</template>

<script>
import ScanCode from "../global/ScanCode";
import validation from "../../mixins/validation";
export default {
  name: "ParcelCode",
  props: {},
  mixins: [validation],
  components: { ScanCode },
  data() {
    return {
      valid: true,
      courier: {
        name: "",
        password: "",
      },
    };
  },

  methods: {
    onScanCodeHandler(data) {
      this.$emit("onParcelCode", { code: data });
    },
  },
};
</script>

<style scoped></style>
