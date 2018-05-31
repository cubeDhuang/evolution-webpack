import Vue from 'vue';
import Router from 'vue-router';

import Automata from "@/components/Automata.vue";
import Upgrades from "@/components/Upgrades.vue";
import Evolution from "@/components/Evolution.vue";
import Ascension from "@/components/Ascension.vue";
import Statistics from "@/components/Statistics.vue";
import Settings from "@/components/Settings.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{ path: "/automata", component: Automata },
		{ path: "/upgrades", component: Upgrades },
		{ path: "/evolution", component: Evolution },
		{ path: "/ascension", component: Ascension },
		{ path: "/settings", component: Settings },
		{ path: "/statistics", component: Statistics },
		{ path: "*", redirect: "/automata" },
	]
})