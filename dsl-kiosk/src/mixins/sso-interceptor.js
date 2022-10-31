import { mapActions } from "vuex";
import { ssoApi } from "@/api/conf";

export default {
  methods: {
    ...mapActions("connection", ["setOffline", "setMaintenance"]),
    ...mapActions("dialog", ["setError"]),

    setRequestInterceptor() {
      ssoApi.interceptors.request.use(
        (request) => {
          return request;
        },
        (error) => {
          console.log(error);
          // let message1, message2;

          // if (error) message1 = error.message;
          // if (error) {
          //   if (error.response) {
          //     if (error.response.data) {
          //       if (error.response.data.data) {
          //         message2 = error.response.data.data.message;
          //       } else {
          //         message2 = error.response.data;
          //       }
          //     }
          //   }
          // }

          // this.setError({
          //   visible: true,
          //   messages: [message1, message2],
          // });

          return Promise.reject(error);
        }
      );
    },

    setResponseInterceptor() {
      ssoApi.interceptors.response.use(
        (response) => {
          if (response.status == 503) {
            this.setMaintenance({ status: true });
          } else {
            this.setMaintenance({ status: false });
          }

          // if (response.status == 500) {
          //   this.setOffline({ status: true });
          // } else {
          //   this.setOffline({ status: false });
          // }

          return response;
        },
        (error) => {
          // console.log(error);

          let message1, message2;

          message1 = error.message;

          if (!error.response) return;

          if (!error.response.data) return;

          if (!error.response.data.data) return;

          if (error.response.data.data.errors) {
            const { deposit_code, pickup_code } =
              error.response.data.data.errors;
            if (deposit_code) message2 = deposit_code;
            if (pickup_code) message2 = pickup_code;
          }

          if (error.response.data.data.message) {
            const { message } = error.response.data.data;
            message2 = message;
          }

          this.setError({
            visible: true,
            messages: [message1, message2],
          });

          return Promise.reject(error);
        }
      );
    },
  },
};
