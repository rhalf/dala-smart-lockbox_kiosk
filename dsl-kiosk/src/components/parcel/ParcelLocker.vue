<template>
  <v-sheet height="450" class="transparent vertical-scroll">
    <locker-picker @onSelectedLocker="onSelectedLocker"></locker-picker>
  </v-sheet>
</template>

<script>
import LockerPicker from "../locker/LockerPicker";

export default {
  name: "ParcelLocker",
  props: {},
  mixins: [],
  components: { LockerPicker },
  data() {
    return {
      // valid: true,
      // courier: {
      //   name: "",
      //   password: "",
      // },
    };
  },

  methods: {
    onSelectedLocker() {
      // console.log(locker);
      // this.$emit("onParcelCode", { code: data });
    },
  },
};
</script>

<style scoped>
.vertical-scroll {
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  padding: 0.5rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.vertical-scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
