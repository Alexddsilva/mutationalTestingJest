/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  $schema: "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  mutate: ["src/funcoes.js"],
  reporters: ["html", "clear-text"],
  testRunner: "jest",
  jest: {
    enableFindRelatedTests: false,
  },
};
