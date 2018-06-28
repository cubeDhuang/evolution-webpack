<template>
	<div>
		<div class="row">
			<div class="col-12">
				<h2>Automata</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-12">
				<nav class="nav nav-pills flex-column select-menu">
					
				</nav>
			</div>
			<div class="col-lg-9 col-12">

			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

import { FORMATTER } from "@/constants.js";

export default {
	name: "Automata",
	computed: mapState(["automata"]),
	constants: {
		NAMES: [
			[
				"Heat Absorber",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Metabolism Process",
				"Energy Source",
			],
			[
				"NOT SHOWN",
				"Mitochondria",
				"Integument System",
				"Circulatory Management",
				"Nerve",
				"Nerve",
				"Nerve Group",
				"Brain Cortex",
				"Brain Cortex",
				"Neural Network Node",
			],
			[
				"NOT SHOWN",
				"NOT SHOWN",
				"Protein Builder",
				"Protein Builder",
				"Protein Builder",
				"Protein Builder",
				"Protein Builder",
				"Protein Builder",
				"Protein Builder",
				"Learning Algorithm",
			]
		]
	}
}
</script>

<style>

</style>
