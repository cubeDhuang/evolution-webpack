<template>
	<nav class="nav nav-pills">
		<router-link
			class="nav-link"
			to="/automata"
			active-class="active">
			Automata
		</router-link>
		<router-link
			class="nav-link"
			to="/upgrades"
			active-class="active">
			Upgrades
		</router-link>
		<router-link
			class="nav-link"
			to="/evolution"
			active-class="active">
			Evolution
		</router-link>
		<router-link
			class="nav-link"
			to="/ascension"
			active-class="active">
			Ascension
		</router-link>
		<router-link
			class="nav-link"
			to="/statistics"
			active-class="active">
			Statistics
		</router-link>
		<router-link
			class="nav-link"
			to="/settings"
			active-class="active">
			Settings
		</router-link>
	</nav>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Nav"
}
</script>

<style>

</style>
