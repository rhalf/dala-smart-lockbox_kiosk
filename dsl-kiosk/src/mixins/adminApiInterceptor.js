import { mapActions } from 'vuex';
import { adminApi } from '@/api/conf';

export default {
	methods: {
		...mapActions('connection', ['setOffline', 'setMaintenance']),
		...mapActions('dialog', ['setError']),

		setRequestInterceptor() {
			adminApi.interceptors.request.use(
				(request) => {
					return request;
				},
				(error) => {
					let message1, message2;

					if (error) message1 = error.message;
					if (error) {
						if (error.response) {
							if (error.response.data) {
								if (error.response.data.data) {
									message2 = error.response.data.data.message;
								} else {
									message2 = error.response.data;
								}
							}
						}
					}

					this.setError({
						visible: true,
						messages: [message1, message2],
					});

					return Promise.reject(error);
				}
			);
		},

		setResponseInterceptor() {
			adminApi.interceptors.response.use(
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
					let message1, message2;

					if (error) message1 = error.message;
					if (error) {
						if (error.response) {
							if (error.response.data) {
								if (error.response.data.data) {
									message2 = error.response.data.data.message;
								} else {
									message2 = error.response.data;
								}
							}
						}
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
