import type { OptionsFiles, OptionsOverrides, TypedFlatConfigItem } from '../types'

import { GLOB_TESTS } from '../globs'
import { interopDefault } from '../utils'

// Hold the reference so we don't redeclare the plugin on each call
let _pluginTest: any

export async function test(options: OptionsFiles & OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const { files = GLOB_TESTS, overrides = {} } = options

  const [pluginVitest, pluginNoOnlyTests] = await Promise.all([
    interopDefault(import('eslint-plugin-vitest')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-no-only-tests'))
  ] as const)

  _pluginTest = _pluginTest || {
    ...pluginVitest,
    rules: {
      ...pluginVitest.rules,
      // extend `test/no-only-tests` rule
      ...pluginNoOnlyTests.rules
    }
  }

  return [
    {
      name: 'pleisto/test/setup',
      plugins: {
        vitest: _pluginTest
      }
    },
    {
      files,
      name: 'pleisto/test/rules',
      rules: {
        'node/prefer-global/process': 'off',

        'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'vitest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/no-only-tests': 'off',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-lowercase-title': 'error',

        ...overrides
      }
    }
  ]
}
