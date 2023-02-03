const path = require("path");

module.exports = {
  extends: [path.join(__dirname, "base"), "plugin:n/recommended"],
  plugins: ["n", "security-node"],
  env: {
    node: true,
    browser: false,
  },
  rules: {
    "no-console": "off",
    "n/shebang": "warn",
    "n/no-unpublished-import": "off",
    "n/no-deprecated-api": "error",
    "n/no-extraneous-import": "off",
    "n/no-missing-import": "off",
    "n/no-unsupported-features/es-syntax": "off",
    "security-node/non-literal-reg-expr": "warn",
    "security-node/detect-child-process": "warn",
    "security-node/detect-buffer-unsafe-allocation": "error",
    "security-node/detect-eval-with-expr": "error",
    "@typescript-eslint/no-extraneous-class": "off"

  },
  env: {
    browser: false,
    node: true,
  },
};
