<template>
	<div>
		<h2>Upgrades</h2>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Upgrades",
	computed: mapState(["flucs"]),
	constants: {
		NAMES: [
			[
				"Faster Reproduction",
				"Faster Reproduction",
				"Faster Reproduction",
				"Faster Reproduction",
				"Faster Reproduction",
				"Faster Reproduction",
				"Faster Reproduction",
				"Stronger Tools",
				"Better Tech",
				"Faster Algorithms",
				"Faster Algorithms",
				"Greater Universes",
				"Universe Fragments",
				"Perfect Universes",
				// DO SOMETHING FOR INFINITIES VVV
			],
			[
				"Useful Genes",
				"Useful Proteins",
				"Advanced Genes",
				"Advanced Proteins",
				"Bigger Size",
				"Complex Brains",
				"Complex Brains",
				"Complex Brains",
				"Complex Brains",
				"Improved Processing",
				"Improved Expansion",
				"Exotic Universes",
				"Faster Destruction",
				"Exotic Multiverses",
				// DO SOMETHING FOR INFINITIES VVV
			]
		]
	}
}
</script>

<style>

</style>
