<template>
	<div id="app" class="container">
		<app-header></app-header>
		<br>
		<div class="row">
			<div class="col-12">
				<h1>Evolution of {{ STAGES[$store.state.stage] }}</h1>
				<p>This is a beta version. It is incomplete and there are many bugs.</p>
				<app-nav></app-nav>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-12">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import { STAGES } from "@/constants.js";

export default {
	name: "App",
	data: () => ({ STAGES }),
	components: {
		AppHeader: Header,
		AppNav: Nav,
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

.logo {
	width: 100px;
	height: auto;
}

.hidden {
	opacity: 0;
}

.nav-pills a, .select-menu a {
	transition: color 0.2s, background 0.2s;
}

.select-menu a {
	margin-bottom: 5px;
}
</style>
