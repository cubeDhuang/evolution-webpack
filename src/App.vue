<template>
	<div id="app" class="container">
		<app-header></app-header>
		<br>
		<div class="row">
			<div class="col-12">
				<h1>{{ stage }}</h1>
				<p>This is a beta version. It is incomplete and there are many bugs.</p>
				<app-nav></app-nav>
			</div>
		</div>
		<br>
		<transition
			enter-active-class="animated fadeIn"
			leave-active-class="animated flipOutX"
			mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import { STAGES } from "@/constants.js";

export default {
	name: "App",
	components: {
		appHeader: Header,
		appNav: Nav,
	},

	created() {
		this.update(0);
	},

	data: () => ({
		now: 0,
		prev: 0,
	}),

	computed: {
		stage() {
			return STAGES[this.$store.state.stage];
		}
	},

	methods: {
		update(now) {
			this.$store.dispatch("update", (now - this.prev) / 1000 || 0);

			this.prev = now;
			requestAnimationFrame(this.update);
		}
	}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,400b");

@media only screen and (max-width : 767px) {
	html {
		font-size: 90%;
	}
}

@media only screen and (max-width : 550px) {
	html {
		font-size: 80%;
	}
}

@media only screen and (max-width : 480px) {
	html {
		font-size: 70%;
	}
}

@media only screen and (max-width : 360px) {
	html {
		font-size: 60%;
	}
}

html {
	overflow-x: hidden;
	overflow-y: scroll;
}

* { font-family: "Open Sans", "Lato", Arial, Helvetica, sans-serif !important; }

h1, h2, h3, h4 { font-weight: 300; }

.nav-pills a, .select-menu a {
	transition: color 0.2s, background 0.2s;
}

.select-menu a {
	margin-bottom: 5px;
}
</style>
