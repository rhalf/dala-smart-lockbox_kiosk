<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <loading-spinner :visible="isLoading" />
    <layout-header />
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import { mapActions } from "vuex";

import LayoutHeader from "./components/layout/layout_header/LayoutHeader";
import LoadingSpinner from "./components/ui/LoadingSpinner";

export default defineComponent({
  name: "App",
  components: { LoadingSpinner, LayoutHeader },
  created() {
    console.log(this.$store.getters);
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.setLoadingSpinner({ visible: false });
    }, 500);
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingSpinner.visible;
    },
  },

  methods: {
    ...mapActions(["setLoadingSpinner"]),
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
</style>
