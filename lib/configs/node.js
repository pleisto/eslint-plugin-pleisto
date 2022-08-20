const path = require("path");

module.exports = {
  extends: [path.join(__dirname, "base"), "plugin:n/recommended"],
  plugins: ["n", "security-node"],
  rules: {
    "no-console": "off",
    "n/no-deprecated-api": "error",
    "n/shebang": "warn",
    "n/no-extraneous-import": "off",
    "security-node/non-literal-reg-expr": "warn",
    "security-node/detect-child-process": "warn",
    "security-node/detect-buffer-unsafe-allocation": "error",
    "security-node/detect-eval-with-expr": "error",
  },
  env: {
    browser: false,
    node: true,
  },
};
