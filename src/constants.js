import Vue from "vue";
import Constants from "vue-constants";

Vue.use(Constants);

import Decimal from "decimal.js";
import { numberformat } from "swarm-numberformat";

export const STAGES = [
	"Universe Singularity",
	"Grand Unified Epoch",
	"Grand Unified Epoch"
];

export const SFX = {
	ascend: new Audio("@/assets/audio/ascend.mp3"),
	flucs: new Audio("@/assets/audio/flucs.mp3"),
	stage: new Audio("@/assets/audio/stagechange.mp3"),
	mutate: new Audio("@/assets/audio/mutate.mp3"),
	switchitem: new Audio("@/assets/audio/switchitem.mp3"),
	switchmenu: new Audio("@/assets/audio/switchmenu.mp3"),
	upgrade: new Audio("@/assets/audio/upgrade.mp3"),
};

export const FORMATTER = new numberformat.Formatter({
	sigfigs: 5,
	format: "standard",
	flavor: "full",
	backend: "decimal.js",
	Decimal: Decimal
});