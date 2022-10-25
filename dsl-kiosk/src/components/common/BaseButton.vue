<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          :height="height"
          class="transparent"
          :class="`${scrollable && 'vertical-scroll'} ${classes}`"
        >
          <slot></slot>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  mixins: [customClass],
  props: {
    height: {
      type: Number,
      default: 525,
    },
    scrollable: {
      type: Boolean,
      default: false,
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
