import Vue from 'vue';
import App from './App';
import router from './router.js';
import { store } from "@/store/store.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});