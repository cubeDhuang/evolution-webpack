const state = {
	automata: 0,
	upgrade: 0
};

const mutations = {
	automata(state, page) {
		state.automata = page;
	},
	upgrade(state, page) {
		state.upgrade = page;
	}
};

export default { state, mutations }