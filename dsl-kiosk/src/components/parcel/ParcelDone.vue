<template>
  <v-sheet height="450" class="transparent vertical-scroll text-center">
    <br />
    <label class="display-1">Done</label>
    <br />
    <br />
    <p class="display-1">If you want to add new parcel press "YES".</p>
    <br />
    <br />
    <p class="display-1">Automatically logout in {{ timeInterval }}s.</p>
  </v-sheet>
</template>

<script>
export default {
  name: "ParcelDone",
  props: {
    enable: Boolean,
  },
  mixins: [],
  components: {},
  data() {
    return {
      timeIntervalHandler: null,
      timeInterval: 20,
    };
  },

  methods: {
    runTimer() {
      this.timeIntervalHandler = setInterval(() => {
        this.timeInterval--;

        if (this.timeInterval == 0) {
          this.$router.go("/");
        }
      }, 1000);
    },
  },

  watch: {
    enable(previous, present) {
      console.log(present);
      if (previous == false) {
        this.runTimer();
      }
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
