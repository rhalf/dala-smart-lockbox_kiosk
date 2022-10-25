<template>
  <v-container>
    <v-row>
      <v-col>
        <BaseSheet scrollable>
          <v-row dense v-for="board in boards" :key="board.id">
            <v-col>
              <Board :item="board"></Board>
            </v-col>
          </v-row>
        </BaseSheet>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn
          class="title"
          color="primary--text"
          @click="$router.push('/home')"
          x-large
          light
        >
          Back to home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ssoApi from "@/api/ssoApi";

import BaseSheet from "@/components/common/BaseSheet.vue";
import Board from "@/components/common/Board.vue";
import { mapActions } from "vuex";

export default {
  name: "LockerView",
  components: { BaseSheet, Board },
  data() {
    return {
      boards: null,
    };
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
  },
  mounted() {
    this.setLoading({ visible: true });
    ssoApi
      .readBoards()
      .then((response) => {
        this.boards = response.data;
      })
      .finally(() => {
        this.setLoading({ visible: false });
      });
  },
};
</script>

<style scoped></style>
