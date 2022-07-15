<template>
	<v-app>
		<design-decoration />
		<loading-spinner />
		<layout-header />

		<v-main>
			<v-fade-transition mode="out-in">
				<maintenance-view v-if="maintenance.status" />
				<router-view v-else></router-view>
			</v-fade-transition>
		</v-main>

		<error-dialog />
		<info-dialog />
	</v-app>
</template>

<script>
	import { defineComponent } from '@vue/composition-api';

	import { mapActions, mapGetters } from 'vuex';

	import LayoutHeader from './components/layout/layout_header/LayoutHeader';
	import LoadingSpinner from './components/ui/LoadingSpinner';
	import ErrorDialog from './components/dialog/ErrorDialog';
	import InfoDialog from './components/dialog/InfoDialog';
	import DesignDecoration from './views/DesignDecoration';

	import adminApiInterceptor from './mixins/adminApiInterceptor';
	import MaintenanceView from './views/MaintenanceView';

	export default defineComponent({
		name: 'App',
		mixins: [adminApiInterceptor],
		components: {
			LoadingSpinner,
			LayoutHeader,
			ErrorDialog,
			InfoDialog,
			DesignDecoration,
			MaintenanceView,
		},
		data() {
			return {
				timeout: null,
				interval: null,
			};
		},
		async created() {
			await this.fetchToken();
			this.setRequestInterceptor();
			this.setResponseInterceptor();
		},
		mounted() {
			this.timeout = setTimeout(() => {
				this.setLoading({ visible: false });
			}, 500);
			this.interval = setInterval(() => {
				this.setOffline({ status: navigator.onLine });
			}, 2000);
		},

		beforeDestroy() {
			clearTimeout(this.timeout);
			clearTimeout(this.interval);
		},

		methods: {
			...mapActions('dialog', ['setError']),
			...mapActions('loading', ['setLoading']),
			...mapActions('token', ['fetchToken']),
			...mapActions('connection', ['setOffline']),
		},

		computed: {
			...mapGetters('connection', ['maintenance']),
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
		font-size: 44px !important;
	}
	.font-medium {
		font-size: 32px !important;
	}
	.font-small {
		font-size: 18px !important;
	}
</style>
