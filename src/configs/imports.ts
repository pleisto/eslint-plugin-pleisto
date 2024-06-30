import type { TypedFlatConfigItem } from '../types'

import { pluginImport } from '../plugins'

export async function imports(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'pleisto/imports/rules',
      plugins: {
        'import-x': pluginImport
      },
      rules: {
        'import-x/first': 'error',
        'import-x/newline-after-import': ['error', { count: 1 }],
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-named-default': 'error',
        'import-x/no-self-import': 'error',
        'import-x/no-webpack-loader-syntax': 'error'
      }
    }
  ]
}
