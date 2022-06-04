<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet height="525" class="transparent vertical-scroll">
          <transaction-viewer />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn
          class="title"
          color="primary--text"
          @click="$router.push('\home')"
          x-large
          light
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TransactionViewer from "@/components/ui/TransactionViewer";
export default {
  name: "TransactionView",
  components: { TransactionViewer },
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
