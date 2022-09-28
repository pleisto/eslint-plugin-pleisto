module.exports = {
  extends: ["standard-with-typescript", "plugin:import/typescript", "prettier"],
  plugins: ["import"],
  env: {
    browser: true,
  },
  rules: {
    // ignore rules which are already provided by the typescript-eslint
    "no-undef": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    // instead of `no-emit-on-error`
    "@typescript-eslint/no-unused-vars": "off",
    // other rules
    "for-direction": "error",
    "func-name-matching": ["error", "always"],
    "getter-return": "error",
    "grouped-accessor-pairs": "error",
    "max-depth": ["warn", 5],
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["warn", 4],
    "no-inner-declarations": ["error", "both"],
    "no-dupe-else-if": "error",
    "no-duplicate-imports": "error",
    "no-implicit-coercion": [
      "error",
      {
        allow: ["!!"],
      },
    ],
    "no-alert": "error",
    "no-bitwise": "off",
    "no-var": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    complexity: [
      "warn",
      {
        max: 20,
      },
    ],
    "max-classes-per-file": ["error", 1],
    "no-nested-ternary": "error",
    "no-param-reassign": "error",
    "func-names": ["error", "as-needed"],
    radix: ["error", "always"],
    "no-plusplus": "off",
    "operator-assignment": "error",
    "prefer-object-spread": "error",
    "prefer-arrow-callback": "error",
    "require-yield": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    "object-shorthand": "error",
    "prefer-template": "error",
    "prefer-destructuring": ["error", { array: false }],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
      },
    ],
    "no-restricted-globals": [
      "error",
      ...[
        "blur",
        "close",
        "focus",
        "length",
        "name",
        "parent",
        "self",
        "stop",
      ].map((name) => ({
        name,
        message: `"${name}" refers to a DOM global. Did you mean to reference a local value instead?`,
      })),
    ],
    "import/no-default-export": "warn",
    "import/no-named-default": "off",
    "no-restricted-imports": "off",
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts", "*.mtsx", "*.ctsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/prefer-ts-expect-error": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksConditionals: true,
            checksVoidReturn: false,
          },
        ],
      },
    },
    {
      files: ["*.test.ts", "*.test.tsx", "*.api-spec.ts"],
      rules: {
        "max-nested-callbacks": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["*.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
