import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
	test: {
		...configDefaults,
		outputTruncateLength: 80
	},
});
