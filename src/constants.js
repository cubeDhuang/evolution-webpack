import Decimal from "decimal.js";
import { numberformat } from "swarm-numberformat";

export const STAGES = [
	"Archaebacteria",
	"Eukaryota",
	"Platyhelminthes",
	"Haikouichthys",
	"Acanthostega",
	"Phthinosuchus",
	"Ouranopithicus",
	"Homo Erectus",
	"Homo Sapiens Sapiens",
	"Artificial Intelligence",
	"Intelligent Energy",
	"Universe Creators",
	"Universe Corruptors",
	"Multiverse Protectors",
	"Omniverse Infinities",
	"Dimensional Seers",
	"Dimensional Shifters",
];

export const SFX = {
	ascend: new Audio("@/assets/audio/ascend.mp3"),
	automata: new Audio("@/assets/audio/automata.mp3"),
	evolve: new Audio("@/assets/audio/evolve.mp3"),
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