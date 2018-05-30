<template>
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-dark bg-primary">
				<span class="navbar-text">
					Stuff<!-- Energy: {{ format(energy) }} -->
				</span>
				<span class="navbar-text">
					Stuff<!-- Efficiency: {{ format(eff) }} -->
				</span>
				<span class="navbar-text">
					Stuff<!-- Wisdom: {{ format(wisdom) }} -->
				</span>
			</nav>
		</div>
	</div>
</template>

<script>
export default {

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
