<template>
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-dark bg-primary">
				<span class="navbar-text">
					Strings: {{ FORMAT(strings) }}
				</span>
				<span class="navbar-text">
					Particles: {{ FORMAT(particles) }}
				</span>
				<span class="navbar-text">
					Wisdom: {{ FORMAT(wisdom) }}
				</span>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

import { FORMATTER } from "@/constants.js";

export default {
	name: "Header",
	data: () => ({ FORMAT: FORMATTER.formatFull }),
	computed: mapState(["strings", "particles", "wisdom"])
}
</script>

<style scoped>
.navbar-dark {
	border-bottom-left-radius: 0.3rem !important;
	border-bottom-right-radius: 0.3rem !important;
}

.navbar-dark .navbar-text {
	color: white;
}
</style>
