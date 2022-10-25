<template>
  <BaseSheet scrollable>
    <v-row dense v-for="board in boards" :key="board.id">
      <v-col>
        <Board :item="board"></Board>
      </v-col>
    </v-row>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";

import ssoApi from "@/api/ssoApi";

import Board from "@/components/common/Board.vue";
import { mapActions } from "vuex";

export default {
  name: "CheckInSelectLocker",
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
      .then(async (response) => {
        response.data.map((board) => {
          board.lockers.map((locker) => {
            return (locker.boardNumber = board.number);
          });
        });
        this.boards = response.data;
        console.log(this.boards);
      })
      .finally(() => {
        this.setLoading({ visible: false });
      });
  },
};
</script>

<style scoped></style>
