import process from 'node:process'

import type {
  OptionsComponentExts,
  OptionsFiles,
  OptionsOverrides,
  OptionsTypeScriptParserOptions,
  OptionsTypeScriptWithTypes,
  TypedFlatConfigItem
} from '../types'

import { GLOB_TS, GLOB_TSX } from '../globs'
import { interopDefault, toArray } from '../utils'

export async function typescript(
  options: OptionsComponentExts &
    OptionsFiles &
    OptionsOverrides &
    OptionsTypeScriptParserOptions &
    OptionsTypeScriptWithTypes = {}
): Promise<TypedFlatConfigItem[]> {
  const { componentExts = [], overrides = {}, parserOptions = {} } = options

  const files = options.files ?? [GLOB_TS, GLOB_TSX, ...componentExts.map(ext => `**/*.${ext}`)]

  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX]
  const ignoresTypeAware = options.ignoresTypeAware ?? []
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : undefined
  const isTypeAware = !!tsconfigPath

  const typeAwareRules: TypedFlatConfigItem['rules'] = {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': 'error',
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    'no-throw-literal': 'off'
  }

  const [pluginTs, parserTs] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser'))
  ] as const)

  function makeParser(typeAware: boolean, files: string[], ignores?: string[]): TypedFlatConfigItem {
    return {
      files,
      ...(ignores ? { ignores } : {}),
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map(ext => `.${ext}`),
          sourceType: 'module',
          ...(typeAware
            ? {
                project: tsconfigPath,
                tsconfigRootDir: process.cwd()
              }
            : {}),
          ...(parserOptions as any)
        }
      },
      name: `pleisto/typescript/${typeAware ? 'type-aware-parser' : 'parser'}`
    }
  }

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'pleisto/typescript/setup',
      plugins: {
        '@typescript-eslint': pluginTs as any
      }
    },
    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...(isTypeAware
      ? [makeParser(true, filesTypeAware, ignoresTypeAware), makeParser(false, files, filesTypeAware)]
      : [makeParser(false, files)]),
    {
      files,
      name: 'pleisto/typescript/rules',
      rules: {
        ...pluginTs.configs['eslint-recommended']!.overrides![0]!.rules!,
        ...pluginTs.configs.strict!.rules!,
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { disallowTypeAnnotations: false, prefer: 'type-imports' }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-restricted-types': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/unified-signatures': 'error',

        'no-dupe-class-members': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        ...overrides
      }
    },
    ...(isTypeAware
      ? [
          {
            files: filesTypeAware,
            ignores: ignoresTypeAware,
            name: 'pleisto/typescript/rules-type-aware',
            rules: typeAwareRules
          }
        ]
      : []),
    {
      files: ['**/*.d.?([cm])ts'],
      name: 'pleisto/typescript/disables/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off'
      }
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      name: 'pleisto/typescript/disables/test',
      rules: {
        'no-unused-expressions': 'off'
      }
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      name: 'pleisto/typescript/disables/cjs',
      rules: {
        '@typescript-eslint/no-require-imports': 'off'
      }
    }
  ]
}
