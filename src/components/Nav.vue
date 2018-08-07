<template>
	<nav class="nav nav-pills" @click.capture="changeSound">
		<router-link
			class="nav-link"
			to="/flucs"
			active-class="active">
			Fluctuators
		</router-link>
		<router-link
			class="nav-link"
			to="/upgrades"
			active-class="active">
			Upgrades
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
import { SFX } from "@/constants.js";

export default {
	name: "Nav",
	methods: {
		changeSound() {
			SFX.switchmenu.play();
		}
	}
}
</script>

<style>

</style>
