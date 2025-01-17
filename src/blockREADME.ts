import { base } from "./base.js";

export const blockREADME = base.createBlock({
	about: {
		name: "README.md",
	},
	produce({ options }) {
		return {
			files: {
				"README.md": `# ${options.title}\n`,
			},
		};
	},
});
