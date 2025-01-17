import { testPreset } from "create-testers";
import { describe, expect, test } from "vitest";

import { presetMinimal } from "./presetMinimal.js";

describe("presetMinimal", () => {
	test("produce", async () => {
		const creation = await testPreset(presetMinimal, {
			options: {
				owner: "my-username",
				title: "My Example",
			},
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [],
			  "files": {
			    "README.md": "# My Example
			",
			  },
			  "requests": [],
			  "scripts": [],
			  "suggestions": [],
			}
		`);
	});
});
