<template>
  <v-app>
    <div class="circle-1"></div>
    <div class="circle-2"></div>
    <div class="circle-3"></div>
    <div class="circle-4"></div>
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

//font
.font-large {
  font-size: 45px !important;
}
.font-medium {
  font-size: 35px !important;
}
.font-small {
  font-size: 20px !important;
}
//arc
.circle-4 {
  position: absolute;
  opacity: 0.35;
  bottom: 150px;
  left: 50px;
  width: 300px;
  height: 300px;
  background: none;
  border: 30px solid yellow;
  border-radius: 150px;
  -moz-border-radius: 150px;
  -webkit-border-radius: 150px;
}

.circle-3 {
  position: absolute;
  opacity: 0.35;
  bottom: 350px;
  left: 10px;
  width: 150px;
  height: 150px;
  background: none;
  border: 20px solid yellow;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.circle-2 {
  position: absolute;
  opacity: 0.35;
  bottom: 150px;
  right: 10px;
  width: 250px;
  height: 250px;
  background: none;
  border: 20px solid yellow;
  border-radius: 150px;
  -moz-border-radius: 150px;
  -webkit-border-radius: 150px;
}

.circle-1 {
  position: absolute;
  opacity: 0.35;
  bottom: 325px;
  right: 10px;
  width: 150px;
  height: 150px;
  background: none;
  border: 30px solid yellow;
  border-radius: 100px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
}
</style>
