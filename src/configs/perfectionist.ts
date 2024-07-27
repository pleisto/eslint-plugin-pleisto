import pluginPerfectionist from 'eslint-plugin-perfectionist'

import type { TypedFlatConfigItem } from '../types'

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'pleisto/perfectionist/setup',
      plugins: {
        perfectionist: pluginPerfectionist
      },
      rules: {
        'perfectionist/sort-intersection-types': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-named-imports': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-named-exports': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-object-types': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-exports': [
          'error',
          {
            type: 'natural',
            order: 'asc'
          }
        ],
        'perfectionist/sort-objects': 'off'
      }
    }
  ]
}
