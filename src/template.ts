import { base } from "./base.js";
import { presetMinimal } from "./presetMinimal.js";

export const template = base.createTemplate({
	about: {
		name: "Example",
	},
	presets: [presetMinimal],
	suggested: presetMinimal,
});

export default template;
