import { BaseOptionsFor, createBase } from "create";
import { z } from "zod";

export const base = createBase({
	options: {
		owner: z
			.string()
			.describe("GitHub organization or user the repository is underneath"),
		title: z.string().describe("'Title Case' title for the repository"),
	},
	template: {
		owner: "JoshuaKGoldberg",
		repository: "create-example",
	},
});

export type BaseOptions = BaseOptionsFor<typeof base>;
