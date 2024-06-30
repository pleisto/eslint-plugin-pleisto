import type { TypedFlatConfigItem } from '../types'

import { pluginNode } from '../plugins'

export async function node(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'pleisto/node/rules',
      plugins: {
        n: pluginNode
      },
      rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-unsupported-features/node-builtins': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/process': ['error', 'never'],
        'n/process-exit-as-throw': 'error'
      }
    }
  ]
}
