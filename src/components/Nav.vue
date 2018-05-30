<template>
	<nav class="nav nav-pills">
		<router-link
			class="nav-link"
			to="/automata"
			:class="[$route.path.includes('automata') ? 'active' : '']">
			Automata
		</router-link>
		<router-link
			class="nav-link"
			to="/upgrades"
			:class="[$route.path.includes('upgrades') ? 'active' : '']">
			Upgrades
		</router-link>
		<router-link
			class="nav-link"
			to="/evolution"
			:class="[$route.path.includes('evolution') ? 'active' : '']">
			Evolution
		</router-link>
		<router-link
			class="nav-link"
			to="/ascension"
			:class="[$route.path.includes('ascension') ? 'active' : '']">
			Ascension
		</router-link>
		<router-link
			class="nav-link"
			to="/settings"
			:class="[$route.path.includes('settings') ? 'active' : '']">
			Settings
		</router-link>
	</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
