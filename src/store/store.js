import Vue from "vue";
import Vuex from "vuex";
import Decimal from "decimal.js";
import numberformat from "swarm-numberformat";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		useSfx: true,

		eff: new Decimal(1),
		energy: new Decimal(0),
		prevEnergy: new Decimal(0),
		totalNow: new Decimal(0),
		total: new Decimal(0),
		speed: new Decimal(500),
		canMutate: true,
		gain: new Decimal(1),

		evolveReq: new Decimal(1000),
		stage: 0,
		highestStage: 0,
		
		wisdom: new Decimal(1),
		ascensions: 0,
		
		automata: [
			{
				name: [
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
				amount: new Decimal(0),
				eps: new Decimal(1),
				cost: new Decimal(1000),
				ocost: new Decimal(1000),
				unlocked: 0
			},
			{
				name: [
					"NOT SHOWN",
					"Mitochondria",
					"Integument System",
					"Circulatory Management",
					"Nerve",
					"Nerve",
					"Nerve Group",
					"Brain Nerve Group",
					"Brain Nerve Group",
					"Neural Network Node",
				],
				amount: new Decimal(0),
				eps: new Decimal(5),
				cost: new Decimal(100000),
				ocost: new Decimal(100000),
				unlocked: 1
			},
			{
				name: [
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
				],
				amount: new Decimal(0),
				eps: new Decimal(5),
				cost: new Decimal(10000000), // 10 Million
				ocost: new Decimal(10000000),
				unlocked: 2
			},
		],

		upgrades: [
			{
				name: [
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
				level: new Decimal(1),
				effect: "Increases Speed",
				cost: new Decimal(10),
				ocost: new Decimal(10),
				prgm: "speed"
			},
			{
				name: [
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
				],
				level: new Decimal(1),
				effect: "More Energy Gain",
				cost: new Decimal(100),
				ocost: new Decimal(100),
				prgm: "gain"
			},
		]
	}
});