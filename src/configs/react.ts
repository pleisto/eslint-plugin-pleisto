import type { OptionsFiles, OptionsOverrides, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { interopDefault, toArray } from '../utils'

export async function react(
  options: OptionsFiles & OptionsOverrides & OptionsTypeScriptWithTypes = {}
): Promise<TypedFlatConfigItem[]> {
  const { files = [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX], overrides = {} } = options

  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : undefined
  const isTypeAware = !!tsconfigPath

  const [pluginReact, pluginReactHooks, parserTs, pluginReactCompiler, pluginJsxA11y] = await Promise.all([
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('@typescript-eslint/parser')),
    interopDefault(import('eslint-plugin-react-compiler')),
    interopDefault(import('eslint-plugin-jsx-a11y'))
  ] as const)

  return [
    {
      name: 'pleisto/react/setup',
      plugins: {
        'jsx-a11y': pluginJsxA11y,
        react: pluginReact,
        'react-compiler': pluginReactCompiler,
        'react-hooks': pluginReactHooks
      }
    },
    {
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ...(isTypeAware ? { project: tsconfigPath } : {})
        },
        sourceType: 'module'
      },
      name: 'pleisto/react/rules',
      rules: {
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/control-has-associated-label': [
          'off',
          {
            ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
            ignoreRoles: [
              'grid',
              'listbox',
              'menu',
              'menubar',
              'radiogroup',
              'row',
              'tablist',
              'toolbar',
              'tree',
              'treegrid'
            ],
            includeRoles: ['alert', 'dialog']
          }
        ],
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': [
          'error',
          {
            tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox']
          }
        ],
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
          'error',
          {
            canvas: ['img'],
            tr: ['none', 'presentation']
          }
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
          'error',
          {
            alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            body: ['onError', 'onLoad'],
            dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            handlers: [
              'onClick',
              'onError',
              'onLoad',
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp'
            ],
            iframe: ['onError', 'onLoad'],
            img: ['onError', 'onLoad']
          }
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'error',
          {
            fieldset: ['radiogroup', 'presentation'],
            li: ['menuitem', 'menuitemradio', 'menuitemcheckbox', 'option', 'row', 'tab', 'treeitem'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            table: ['grid'],
            td: ['gridcell'],
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid']
          }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
          'error',
          {
            allowExpressionValues: true,
            roles: ['tabpanel'],
            tags: []
          }
        ],
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': [
          'error',
          {
            allowExpressionValues: true,
            handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
          }
        ],
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',
        'react/display-name': 'error',

        'react/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'always', props: 'never' }],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-key': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'warn',
        'react/no-namespace': 'warn',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/prop-types': 'off',
        'react/require-render-return': 'error',
        'react/void-dom-elements-no-children': 'error',
        // extra
        'react-compiler/react-compiler': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',

        // overrides
        ...overrides
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
  ]
}
