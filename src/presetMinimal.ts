import { base } from "./base.js";
import { blockREADME } from "./blockREADME.js";

export const presetMinimal = base.createPreset({
	about: {
		description: "Just a README.md with the title.",
		name: "Minimal",
	},
	blocks: [blockREADME],
});
