/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
    plugins: ["unused-imports"],
    rules: {
      "unused-imports/no-unused-imports": "error"
    },
};
