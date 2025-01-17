import { testBlock } from "create-testers";
import { describe, expect, test } from "vitest";

import { blockREADME } from "./blockREADME.js";

describe("blockREADME", () => {
	test("produce", () => {
		const creation = testBlock(blockREADME, {
			options: {
				owner: "my-username",
				title: "My Example",
			},
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    "README.md": "# My Example
			",
			  },
			}
		`);
	});
});
