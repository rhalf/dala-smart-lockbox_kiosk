<template>
  <div v-show="loading.visible">
    <v-overlay :absolute="false" :value="true" :opacity="0.75">
      <div class="lds-dual-ring"></div>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoadingSpinner",
  computed: {
    ...mapGetters("loading", ["loading"]),
  },
};
</script>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 8px solid #f2d432;
  border-color: #f2d432 transparent #f2d432 transparent;
  animation: lds-dual-ring 1s linear infinite;
  animation: lds-dual-ring 0.6s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
