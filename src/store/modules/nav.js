const state = {
	flucs: 0,
	upgrade: 0
};

const mutations = {
	flucs(state, page) {
		state.flucs = page;
	},
	upgrade(state, page) {
		state.upgrade = page;
	}
};

export default { state, mutations }