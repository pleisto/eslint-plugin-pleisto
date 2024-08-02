import type { ParserOptions } from '@typescript-eslint/parser'
import type { Linter } from 'eslint'
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

import type { ConfigNames, RuleOptions } from './typegen'

export type Awaitable<T> = Promise<T> | T

export type Rules = RuleOptions

export type { ConfigNames }

export type TypedFlatConfigItem = {
  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
} & Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'>

export interface OptionsFiles {
  /**
   * Override the `files` option to provide custom globs.
   */
  files?: string[]
}

export type OptionsTypescript =
  | (OptionsOverrides & OptionsTypeScriptParserOptions)
  | (OptionsOverrides & OptionsTypeScriptWithTypes)

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsTypeScriptParserOptions {
  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[]

  /**
   * Glob patterns for files that should not be type aware.
   * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
   */
  ignoresTypeAware?: string[]

  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>
}

export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string | string[]
}

export interface OptionsHasTypeScript {
  typescript?: boolean
}

export interface OptionsOverrides {
  overrides?: TypedFlatConfigItem['rules']
}

export interface OptionsRegExp {
  /**
   * Override rulelevels
   */
  level?: 'error' | 'warn'
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * Automatically rename plugins in the config.
   *
   * @default true
   */
  autoRenamePlugins?: boolean

  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: FlatGitignoreOptions | boolean

  /**
   * Core rules. Can't be disabled.
   */
  javascript?: OptionsOverrides

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean

  /**
   * Enable react rules.
   *
   * @default false
   */
  react?: OptionsOverrides | boolean

  /**
   * Enable regexp rules.
   *
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/
   * @default true
   */
  regexp?: (OptionsOverrides & OptionsRegExp) | boolean

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: OptionsOverrides | boolean

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: OptionsTypescript | boolean
}
