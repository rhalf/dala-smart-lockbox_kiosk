// import adminApi from "../../../api/adminApi";

export default {
  async setCode(context, payload) {
    context.commit("SET_CODE", payload);
  },
 
};
