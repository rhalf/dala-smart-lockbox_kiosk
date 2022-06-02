<template>
  <v-app>
    <loading-spinner />
    <layout-header />
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <error-dialog />
    <info-dialog />
  </v-app>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import { mapActions } from "vuex";

import LayoutHeader from "./components/layout/layout_header/LayoutHeader";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorDialog from "./components/dialog/ErrorDialog";
import InfoDialog from "./components/dialog/InfoDialog";

export default defineComponent({
  name: "App",
  components: { LoadingSpinner, LayoutHeader, ErrorDialog, InfoDialog },
  created() {},
  mounted() {
    this.timeout = setTimeout(() => {
      this.setLoading({ visible: false });
    }, 500);
  },

  methods: {
    ...mapActions("loading", ["setLoading"]),
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // background: #708515;
  // background: rgb(90, 120, 15);
  // background: linear-gradient(
  //   240deg,
  //   rgba(90, 120, 15, 1) 10%,
  //   rgba(128, 149, 37, 1) 35%,
  //   rgba(128, 149, 37, 1) 65%,
  //   rgba(90, 120, 15, 1) 90%
  // );

  background: rgb(74, 104, 15);
  background: linear-gradient(
    240deg,
    rgba(74, 104, 15, 1) 10%,
    rgba(128, 149, 37, 1) 35%,
    rgba(128, 149, 37, 1) 65%,
    rgba(74, 104, 15, 1) 90%
  );

  padding-left: 2rem;
  padding-right: 2rem;
}

/* hide scrollbar but allow scrolling */
html {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: hidden;
  zoom: 140%;
}

html::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.font-large {
  font-size: 45px !important;
}
.font-medium {
  font-size: 35px !important;
}
.font-small {
  font-size: 20px !important;
}
</style>
