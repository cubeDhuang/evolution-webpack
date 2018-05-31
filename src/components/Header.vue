<template>
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-dark bg-primary">
				<span class="navbar-text">
					Energy: {{ FORMAT(energy) }}
				</span>
				<span class="navbar-text">
					Efficiency: {{ FORMAT(eff) }}
				</span>
				<span class="navbar-text">
					Wisdom: {{ FORMAT(wisdom) }}
				</span>
			</nav>
		</div>
	</div>
</template>

<script>
import { FORMATTER } from "@/constants.js";
import { Decimal } from "decimal.js";

import { mapState } from "vuex";

export default {
	name: "Header",
	data: () => ({ FORMAT: FORMATTER.formatFull, Decimal }),
	computed: mapState(["energy", "eff", "wisdom"])
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
