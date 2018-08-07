import Vue from 'vue';
import Router from 'vue-router';

import Fluctuators from "@/components/Fluctuators.vue";
import Upgrades from "@/components/Upgrades.vue";
import Ascension from "@/components/Ascension.vue";
import Statistics from "@/components/Statistics.vue";
import Settings from "@/components/Settings.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{ path: "/flucs", component: Fluctuators },
		{ path: "/upgrades", component: Upgrades },
		{ path: "/ascension", component: Ascension },
		{ path: "/settings", component: Settings },
		{ path: "/statistics", component: Statistics },
		{ path: "*", redirect: "/flucs" },
	]
})