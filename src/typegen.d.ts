/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce getter and setter pairs in objects and classes
   * @see https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-newline
   * @deprecated
   */
  'array-bracket-newline'?: Linter.RuleEntry<ArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
   * @deprecated
   */
  'array-bracket-spacing'?: Linter.RuleEntry<ArrayBracketSpacing>
  /**
   * Enforce `return` statements in callbacks of array methods
   * @see https://eslint.org/docs/latest/rules/array-callback-return
   */
  'array-callback-return'?: Linter.RuleEntry<ArrayCallbackReturn>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.org/docs/latest/rules/array-element-newline
   * @deprecated
   */
  'array-element-newline'?: Linter.RuleEntry<ArrayElementNewline>
  /**
   * Require braces around arrow function bodies
   * @see https://eslint.org/docs/latest/rules/arrow-body-style
   */
  'arrow-body-style'?: Linter.RuleEntry<ArrowBodyStyle>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.org/docs/latest/rules/arrow-parens
   * @deprecated
   */
  'arrow-parens'?: Linter.RuleEntry<ArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.org/docs/latest/rules/arrow-spacing
   * @deprecated
   */
  'arrow-spacing'?: Linter.RuleEntry<ArrowSpacing>
  /**
   * Enforce the use of variables within the scope they are defined
   * @see https://eslint.org/docs/latest/rules/block-scoped-var
   */
  'block-scoped-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.org/docs/latest/rules/block-spacing
   * @deprecated
   */
  'block-spacing'?: Linter.RuleEntry<BlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.org/docs/latest/rules/brace-style
   * @deprecated
   */
  'brace-style'?: Linter.RuleEntry<BraceStyle>
  /**
   * Require `return` statements after callbacks
   * @see https://eslint.org/docs/latest/rules/callback-return
   * @deprecated
   */
  'callback-return'?: Linter.RuleEntry<CallbackReturn>
  /**
   * Enforce camelcase naming convention
   * @see https://eslint.org/docs/latest/rules/camelcase
   */
  'camelcase'?: Linter.RuleEntry<Camelcase>
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   * @see https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments'?: Linter.RuleEntry<CapitalizedComments>
  /**
   * Enforce that class methods utilize `this`
   * @see https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  'class-methods-use-this'?: Linter.RuleEntry<ClassMethodsUseThis>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.org/docs/latest/rules/comma-dangle
   * @deprecated
   */
  'comma-dangle'?: Linter.RuleEntry<CommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.org/docs/latest/rules/comma-spacing
   * @deprecated
   */
  'comma-spacing'?: Linter.RuleEntry<CommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.org/docs/latest/rules/comma-style
   * @deprecated
   */
  'comma-style'?: Linter.RuleEntry<CommaStyle>
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   * @see https://eslint.org/docs/latest/rules/complexity
   */
  'complexity'?: Linter.RuleEntry<Complexity>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.org/docs/latest/rules/computed-property-spacing
   * @deprecated
   */
  'computed-property-spacing'?: Linter.RuleEntry<ComputedPropertySpacing>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return'?: Linter.RuleEntry<ConsistentReturn>
  /**
   * Enforce consistent naming when capturing the current execution context
   * @see https://eslint.org/docs/latest/rules/consistent-this
   */
  'consistent-this'?: Linter.RuleEntry<ConsistentThis>
  /**
   * Require `super()` calls in constructors
   * @see https://eslint.org/docs/latest/rules/constructor-super
   */
  'constructor-super'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent brace style for all control statements
   * @see https://eslint.org/docs/latest/rules/curly
   */
  'curly'?: Linter.RuleEntry<Curly>
  /**
   * Require `default` cases in `switch` statements
   * @see https://eslint.org/docs/latest/rules/default-case
   */
  'default-case'?: Linter.RuleEntry<DefaultCase>
  /**
   * Enforce `default` clauses in `switch` statements to be last
   * @see https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce default parameters to be last
   * @see https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.org/docs/latest/rules/dot-location
   * @deprecated
   */
  'dot-location'?: Linter.RuleEntry<DotLocation>
  /**
   * Enforce dot notation whenever possible
   * @see https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation'?: Linter.RuleEntry<DotNotation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.org/docs/latest/rules/eol-last
   * @deprecated
   */
  'eol-last'?: Linter.RuleEntry<EolLast>
  /**
   * Require the use of `===` and `!==`
   * @see https://eslint.org/docs/latest/rules/eqeqeq
   */
  'eqeqeq'?: Linter.RuleEntry<Eqeqeq>
  /**
   * Enforce `for` loop update clause moving the counter in the right direction
   * @see https://eslint.org/docs/latest/rules/for-direction
   */
  'for-direction'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.org/docs/latest/rules/func-call-spacing
   * @deprecated
   */
  'func-call-spacing'?: Linter.RuleEntry<FuncCallSpacing>
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   * @see https://eslint.org/docs/latest/rules/func-name-matching
   */
  'func-name-matching'?: Linter.RuleEntry<FuncNameMatching>
  /**
   * Require or disallow named `function` expressions
   * @see https://eslint.org/docs/latest/rules/func-names
   */
  'func-names'?: Linter.RuleEntry<FuncNames>
  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style'?: Linter.RuleEntry<FuncStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
   * @deprecated
   */
  'function-call-argument-newline'?: Linter.RuleEntry<FunctionCallArgumentNewline>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.org/docs/latest/rules/function-paren-newline
   * @deprecated
   */
  'function-paren-newline'?: Linter.RuleEntry<FunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.org/docs/latest/rules/generator-star-spacing
   * @deprecated
   */
  'generator-star-spacing'?: Linter.RuleEntry<GeneratorStarSpacing>
  /**
   * Enforce `return` statements in getters
   * @see https://eslint.org/docs/latest/rules/getter-return
   */
  'getter-return'?: Linter.RuleEntry<GetterReturn>
  /**
   * Require `require()` calls to be placed at top-level module scope
   * @see https://eslint.org/docs/latest/rules/global-require
   * @deprecated
   */
  'global-require'?: Linter.RuleEntry<[]>
  /**
   * Require grouped accessor pairs in object literals and classes
   * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs'?: Linter.RuleEntry<GroupedAccessorPairs>
  /**
   * Require `for-in` loops to include an `if` statement
   * @see https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in'?: Linter.RuleEntry<[]>
  /**
   * Require error handling in callbacks
   * @see https://eslint.org/docs/latest/rules/handle-callback-err
   * @deprecated
   */
  'handle-callback-err'?: Linter.RuleEntry<HandleCallbackErr>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-blacklist
   * @deprecated
   */
  'id-blacklist'?: Linter.RuleEntry<IdBlacklist>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist'?: Linter.RuleEntry<IdDenylist>
  /**
   * Enforce minimum and maximum identifier lengths
   * @see https://eslint.org/docs/latest/rules/id-length
   */
  'id-length'?: Linter.RuleEntry<IdLength>
  /**
   * Require identifiers to match a specified regular expression
   * @see https://eslint.org/docs/latest/rules/id-match
   */
  'id-match'?: Linter.RuleEntry<IdMatch>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
   * @deprecated
   */
  'implicit-arrow-linebreak'?: Linter.RuleEntry<ImplicitArrowLinebreak>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/consistent-type-specifier-style.md
   */
  'import-x/consistent-type-specifier-style'?: Linter.RuleEntry<ImportXConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/default.md
   */
  'import-x/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/dynamic-import-chunkname.md
   */
  'import-x/dynamic-import-chunkname'?: Linter.RuleEntry<ImportXDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/export.md
   */
  'import-x/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/exports-last.md
   */
  'import-x/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/extensions.md
   */
  'import-x/extensions'?: Linter.RuleEntry<ImportXExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/first.md
   */
  'import-x/first'?: Linter.RuleEntry<ImportXFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/group-exports.md
   */
  'import-x/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import-x/first`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/imports-first.md
   * @deprecated
   */
  'import-x/imports-first'?: Linter.RuleEntry<ImportXImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/max-dependencies.md
   */
  'import-x/max-dependencies'?: Linter.RuleEntry<ImportXMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/named.md
   */
  'import-x/named'?: Linter.RuleEntry<ImportXNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/namespace.md
   */
  'import-x/namespace'?: Linter.RuleEntry<ImportXNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/newline-after-import.md
   */
  'import-x/newline-after-import'?: Linter.RuleEntry<ImportXNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-absolute-path.md
   */
  'import-x/no-absolute-path'?: Linter.RuleEntry<ImportXNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-amd.md
   */
  'import-x/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-anonymous-default-export.md
   */
  'import-x/no-anonymous-default-export'?: Linter.RuleEntry<ImportXNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-commonjs.md
   */
  'import-x/no-commonjs'?: Linter.RuleEntry<ImportXNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-cycle.md
   */
  'import-x/no-cycle'?: Linter.RuleEntry<ImportXNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-default-export.md
   */
  'import-x/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-deprecated.md
   */
  'import-x/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-duplicates.md
   */
  'import-x/no-duplicates'?: Linter.RuleEntry<ImportXNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-dynamic-require.md
   */
  'import-x/no-dynamic-require'?: Linter.RuleEntry<ImportXNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-empty-named-blocks.md
   */
  'import-x/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-extraneous-dependencies.md
   */
  'import-x/no-extraneous-dependencies'?: Linter.RuleEntry<ImportXNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-import-module-exports.md
   */
  'import-x/no-import-module-exports'?: Linter.RuleEntry<ImportXNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-internal-modules.md
   */
  'import-x/no-internal-modules'?: Linter.RuleEntry<ImportXNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-mutable-exports.md
   */
  'import-x/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-named-as-default.md
   */
  'import-x/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-named-as-default-member.md
   */
  'import-x/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-named-default.md
   */
  'import-x/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-named-export.md
   */
  'import-x/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-namespace.md
   */
  'import-x/no-namespace'?: Linter.RuleEntry<ImportXNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-nodejs-modules.md
   */
  'import-x/no-nodejs-modules'?: Linter.RuleEntry<ImportXNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-relative-packages.md
   */
  'import-x/no-relative-packages'?: Linter.RuleEntry<ImportXNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-relative-parent-imports.md
   */
  'import-x/no-relative-parent-imports'?: Linter.RuleEntry<ImportXNoRelativeParentImports>
  /**
   * Forbid importing a default export by a different name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-rename-default.md
   */
  'import-x/no-rename-default'?: Linter.RuleEntry<ImportXNoRenameDefault>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-restricted-paths.md
   */
  'import-x/no-restricted-paths'?: Linter.RuleEntry<ImportXNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-self-import.md
   */
  'import-x/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-unassigned-import.md
   */
  'import-x/no-unassigned-import'?: Linter.RuleEntry<ImportXNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-unresolved.md
   */
  'import-x/no-unresolved'?: Linter.RuleEntry<ImportXNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-unused-modules.md
   */
  'import-x/no-unused-modules'?: Linter.RuleEntry<ImportXNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-useless-path-segments.md
   */
  'import-x/no-useless-path-segments'?: Linter.RuleEntry<ImportXNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/no-webpack-loader-syntax.md
   */
  'import-x/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/order.md
   */
  'import-x/order'?: Linter.RuleEntry<ImportXOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/prefer-default-export.md
   */
  'import-x/prefer-default-export'?: Linter.RuleEntry<ImportXPreferDefaultExport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.10.3/docs/rules/unambiguous.md
   */
  'import-x/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent
   * @deprecated
   */
  'indent'?: Linter.RuleEntry<Indent>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent-legacy
   * @deprecated
   */
  'indent-legacy'?: Linter.RuleEntry<IndentLegacy>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://eslint.org/docs/latest/rules/init-declarations
   */
  'init-declarations'?: Linter.RuleEntry<InitDeclarations>
  /**
   * Enforce emojis are wrapped in `<span>` and provide screen reader access.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md
   * @deprecated
   */
  'jsx-a11y/accessible-emoji'?: Linter.RuleEntry<JsxA11YAccessibleEmoji>
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text'?: Linter.RuleEntry<JsxA11YAltText>
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<JsxA11YAnchorAmbiguousText>
  /**
   * Enforce all anchors to contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content'?: Linter.RuleEntry<JsxA11YAnchorHasContent>
  /**
   * Enforce all anchors are valid, navigable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<JsxA11YAnchorIsValid>
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<JsxA11YAriaActivedescendantHasTabindex>
  /**
   * Enforce all `aria-*` props are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props'?: Linter.RuleEntry<JsxA11YAriaProps>
  /**
   * Enforce ARIA state and property values are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes'?: Linter.RuleEntry<JsxA11YAriaProptypes>
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role'?: Linter.RuleEntry<JsxA11YAriaRole>
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<JsxA11YAriaUnsupportedElements>
  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<JsxA11YAutocompleteValid>
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<JsxA11YClickEventsHaveKeyEvents>
  /**
   * Enforce that a control (an interactive element) has a text label.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   */
  'jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<JsxA11YControlHasAssociatedLabel>
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content'?: Linter.RuleEntry<JsxA11YHeadingHasContent>
  /**
   * Enforce `<html>` element has `lang` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang'?: Linter.RuleEntry<JsxA11YHtmlHasLang>
  /**
   * Enforce iframe elements have a title attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title'?: Linter.RuleEntry<JsxA11YIframeHasTitle>
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<JsxA11YImgRedundantAlt>
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<JsxA11YInteractiveSupportsFocus>
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<JsxA11YLabelHasAssociatedControl>
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md
   * @deprecated
   */
  'jsx-a11y/label-has-for'?: Linter.RuleEntry<JsxA11YLabelHasFor>
  /**
   * Enforce lang attribute has a valid value.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md
   */
  'jsx-a11y/lang'?: Linter.RuleEntry<JsxA11YLang>
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption'?: Linter.RuleEntry<JsxA11YMediaHasCaption>
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<JsxA11YMouseEventsHaveKeyEvents>
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key'?: Linter.RuleEntry<JsxA11YNoAccessKey>
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md
   */
  'jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<JsxA11YNoAriaHiddenOnFocusable>
  /**
   * Enforce autoFocus prop is not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus'?: Linter.RuleEntry<JsxA11YNoAutofocus>
  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<JsxA11YNoDistractingElements>
  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<JsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementInteractions>
  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<JsxA11YNoNoninteractiveTabindex>
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md
   * @deprecated
   */
  'jsx-a11y/no-onchange'?: Linter.RuleEntry<JsxA11YNoOnchange>
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<JsxA11YNoRedundantRoles>
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
   */
  'jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<JsxA11YNoStaticElementInteractions>
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md
   */
  'jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<JsxA11YPreferTagOverRole>
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md
   */
  'jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<JsxA11YRoleHasRequiredAriaProps>
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<JsxA11YRoleSupportsAriaProps>
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md
   */
  'jsx-a11y/scope'?: Linter.RuleEntry<JsxA11YScope>
  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<JsxA11YTabindexNoPositive>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.org/docs/latest/rules/jsx-quotes
   * @deprecated
   */
  'jsx-quotes'?: Linter.RuleEntry<JsxQuotes>
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   * @see https://eslint.org/docs/latest/rules/key-spacing
   * @deprecated
   */
  'key-spacing'?: Linter.RuleEntry<KeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.org/docs/latest/rules/keyword-spacing
   * @deprecated
   */
  'keyword-spacing'?: Linter.RuleEntry<KeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.org/docs/latest/rules/line-comment-position
   * @deprecated
   */
  'line-comment-position'?: Linter.RuleEntry<LineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.org/docs/latest/rules/linebreak-style
   * @deprecated
   */
  'linebreak-style'?: Linter.RuleEntry<LinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.org/docs/latest/rules/lines-around-comment
   * @deprecated
   */
  'lines-around-comment'?: Linter.RuleEntry<LinesAroundComment>
  /**
   * Require or disallow newlines around directives
   * @see https://eslint.org/docs/latest/rules/lines-around-directive
   * @deprecated
   */
  'lines-around-directive'?: Linter.RuleEntry<LinesAroundDirective>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.org/docs/latest/rules/lines-between-class-members
   * @deprecated
   */
  'lines-between-class-members'?: Linter.RuleEntry<LinesBetweenClassMembers>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
   */
  'logical-assignment-operators'?: Linter.RuleEntry<LogicalAssignmentOperators>
  /**
   * Enforce a maximum number of classes per file
   * @see https://eslint.org/docs/latest/rules/max-classes-per-file
   */
  'max-classes-per-file'?: Linter.RuleEntry<MaxClassesPerFile>
  /**
   * Enforce a maximum depth that blocks can be nested
   * @see https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth'?: Linter.RuleEntry<MaxDepth>
  /**
   * Enforce a maximum line length
   * @see https://eslint.org/docs/latest/rules/max-len
   * @deprecated
   */
  'max-len'?: Linter.RuleEntry<MaxLen>
  /**
   * Enforce a maximum number of lines per file
   * @see https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines'?: Linter.RuleEntry<MaxLines>
  /**
   * Enforce a maximum number of lines of code in a function
   * @see https://eslint.org/docs/latest/rules/max-lines-per-function
   */
  'max-lines-per-function'?: Linter.RuleEntry<MaxLinesPerFunction>
  /**
   * Enforce a maximum depth that callbacks can be nested
   * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks'?: Linter.RuleEntry<MaxNestedCallbacks>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://eslint.org/docs/latest/rules/max-params
   */
  'max-params'?: Linter.RuleEntry<MaxParams>
  /**
   * Enforce a maximum number of statements allowed in function blocks
   * @see https://eslint.org/docs/latest/rules/max-statements
   */
  'max-statements'?: Linter.RuleEntry<MaxStatements>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.org/docs/latest/rules/max-statements-per-line
   * @deprecated
   */
  'max-statements-per-line'?: Linter.RuleEntry<MaxStatementsPerLine>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.org/docs/latest/rules/multiline-comment-style
   * @deprecated
   */
  'multiline-comment-style'?: Linter.RuleEntry<MultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.org/docs/latest/rules/multiline-ternary
   * @deprecated
   */
  'multiline-ternary'?: Linter.RuleEntry<MultilineTernary>
  /**
   * require `return` statements after callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
   */
  'n/callback-return'?: Linter.RuleEntry<NCallbackReturn>
  /**
   * enforce either `module.exports` or `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
   */
  'n/exports-style'?: Linter.RuleEntry<NExportsStyle>
  /**
   * enforce the style of file extensions in `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
   */
  'n/file-extension-in-import'?: Linter.RuleEntry<NFileExtensionInImport>
  /**
   * require `require()` calls to be placed at top-level module scope
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
   */
  'n/global-require'?: Linter.RuleEntry<[]>
  /**
   * require error handling in callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
   */
  'n/handle-callback-err'?: Linter.RuleEntry<NHandleCallbackErr>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   */
  'n/hashbang'?: Linter.RuleEntry<NHashbang>
  /**
   * enforce Node.js-style error-first callback pattern is followed
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
   */
  'n/no-callback-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated APIs
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
   */
  'n/no-deprecated-api'?: Linter.RuleEntry<NNoDeprecatedApi>
  /**
   * disallow the assignment to `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
   */
  'n/no-exports-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow `import` declarations which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
   */
  'n/no-extraneous-import'?: Linter.RuleEntry<NNoExtraneousImport>
  /**
   * disallow `require()` expressions which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
   */
  'n/no-extraneous-require'?: Linter.RuleEntry<NNoExtraneousRequire>
  /**
   * disallow third-party modules which are hiding core modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
   * @deprecated
   */
  'n/no-hide-core-modules'?: Linter.RuleEntry<NNoHideCoreModules>
  /**
   * disallow `import` declarations which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'n/no-missing-import'?: Linter.RuleEntry<NNoMissingImport>
  /**
   * disallow `require()` expressions which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
   */
  'n/no-missing-require'?: Linter.RuleEntry<NNoMissingRequire>
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
   */
  'n/no-mixed-requires'?: Linter.RuleEntry<NNoMixedRequires>
  /**
   * disallow `new` operators with calls to `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
   */
  'n/no-new-require'?: Linter.RuleEntry<[]>
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
   */
  'n/no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `process.env`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
   */
  'n/no-process-env'?: Linter.RuleEntry<NNoProcessEnv>
  /**
   * disallow the use of `process.exit()`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
   */
  'n/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * disallow specified modules when loaded by `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
   */
  'n/no-restricted-import'?: Linter.RuleEntry<NNoRestrictedImport>
  /**
   * disallow specified modules when loaded by `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
   */
  'n/no-restricted-require'?: Linter.RuleEntry<NNoRestrictedRequire>
  /**
   * disallow synchronous methods
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
   */
  'n/no-sync'?: Linter.RuleEntry<NNoSync>
  /**
   * disallow `bin` files that npm ignores
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
   */
  'n/no-unpublished-bin'?: Linter.RuleEntry<NNoUnpublishedBin>
  /**
   * disallow `import` declarations which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
   */
  'n/no-unpublished-import'?: Linter.RuleEntry<NNoUnpublishedImport>
  /**
   * disallow `require()` expressions which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
   */
  'n/no-unpublished-require'?: Linter.RuleEntry<NNoUnpublishedRequire>
  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
   */
  'n/no-unsupported-features/es-builtins'?: Linter.RuleEntry<NNoUnsupportedFeaturesEsBuiltins>
  /**
   * disallow unsupported ECMAScript syntax on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
   */
  'n/no-unsupported-features/es-syntax'?: Linter.RuleEntry<NNoUnsupportedFeaturesEsSyntax>
  /**
   * disallow unsupported Node.js built-in APIs on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
   */
  'n/no-unsupported-features/node-builtins'?: Linter.RuleEntry<NNoUnsupportedFeaturesNodeBuiltins>
  /**
   * enforce either `Buffer` or `require("buffer").Buffer`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
   */
  'n/prefer-global/buffer'?: Linter.RuleEntry<NPreferGlobalBuffer>
  /**
   * enforce either `console` or `require("console")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
   */
  'n/prefer-global/console'?: Linter.RuleEntry<NPreferGlobalConsole>
  /**
   * enforce either `process` or `require("process")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
   */
  'n/prefer-global/process'?: Linter.RuleEntry<NPreferGlobalProcess>
  /**
   * enforce either `TextDecoder` or `require("util").TextDecoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
   */
  'n/prefer-global/text-decoder'?: Linter.RuleEntry<NPreferGlobalTextDecoder>
  /**
   * enforce either `TextEncoder` or `require("util").TextEncoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
   */
  'n/prefer-global/text-encoder'?: Linter.RuleEntry<NPreferGlobalTextEncoder>
  /**
   * enforce either `URL` or `require("url").URL`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
   */
  'n/prefer-global/url'?: Linter.RuleEntry<NPreferGlobalUrl>
  /**
   * enforce either `URLSearchParams` or `require("url").URLSearchParams`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
   */
  'n/prefer-global/url-search-params'?: Linter.RuleEntry<NPreferGlobalUrlSearchParams>
  /**
   * enforce using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
   */
  'n/prefer-node-protocol'?: Linter.RuleEntry<NPreferNodeProtocol>
  /**
   * enforce `require("dns").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
   */
  'n/prefer-promises/dns'?: Linter.RuleEntry<[]>
  /**
   * enforce `require("fs").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
   */
  'n/prefer-promises/fs'?: Linter.RuleEntry<[]>
  /**
   * require that `process.exit()` expressions use the same code path as `throw`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
   */
  'n/process-exit-as-throw'?: Linter.RuleEntry<[]>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   * @deprecated
   */
  'n/shebang'?: Linter.RuleEntry<NShebang>
  /**
   * Require constructor names to begin with a capital letter
   * @see https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap'?: Linter.RuleEntry<NewCap>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.org/docs/latest/rules/new-parens
   * @deprecated
   */
  'new-parens'?: Linter.RuleEntry<NewParens>
  /**
   * Require or disallow an empty line after variable declarations
   * @see https://eslint.org/docs/latest/rules/newline-after-var
   * @deprecated
   */
  'newline-after-var'?: Linter.RuleEntry<NewlineAfterVar>
  /**
   * Require an empty line before `return` statements
   * @see https://eslint.org/docs/latest/rules/newline-before-return
   * @deprecated
   */
  'newline-before-return'?: Linter.RuleEntry<[]>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
   * @deprecated
   */
  'newline-per-chained-call'?: Linter.RuleEntry<NewlinePerChainedCall>
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   * @see https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array` constructors
   * @see https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using an async function as a Promise executor
   * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
   */
  'no-async-promise-executor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `await` inside of loops
   * @see https://eslint.org/docs/latest/rules/no-await-in-loop
   */
  'no-await-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators
   * @see https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise'?: Linter.RuleEntry<NoBitwise>
  /**
   * Disallow use of the `Buffer()` constructor
   * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
   * @deprecated
   */
  'no-buffer-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   * @see https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller'?: Linter.RuleEntry<[]>
  /**
   * Disallow lexical declarations in case clauses
   * @see https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-catch-shadow
   * @deprecated
   */
  'no-catch-shadow'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning class members
   * @see https://eslint.org/docs/latest/rules/no-class-assign
   */
  'no-class-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing against `-0`
   * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignment operators in conditional expressions
   * @see https://eslint.org/docs/latest/rules/no-cond-assign
   */
  'no-cond-assign'?: Linter.RuleEntry<NoCondAssign>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
   * @deprecated
   */
  'no-confusing-arrow'?: Linter.RuleEntry<NoConfusingArrow>
  /**
   * Disallow the use of `console`
   * @see https://eslint.org/docs/latest/rules/no-console
   */
  'no-console'?: Linter.RuleEntry<NoConsole>
  /**
   * Disallow reassigning `const` variables
   * @see https://eslint.org/docs/latest/rules/no-const-assign
   */
  'no-const-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow expressions where the operation doesn't affect the value
   * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow constant expressions in conditions
   * @see https://eslint.org/docs/latest/rules/no-constant-condition
   */
  'no-constant-condition'?: Linter.RuleEntry<NoConstantCondition>
  /**
   * Disallow returning value from constructor
   * @see https://eslint.org/docs/latest/rules/no-constructor-return
   */
  'no-constructor-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow `continue` statements
   * @see https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow control characters in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-control-regex
   */
  'no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `debugger`
   * @see https://eslint.org/docs/latest/rules/no-debugger
   */
  'no-debugger'?: Linter.RuleEntry<[]>
  /**
   * Disallow deleting variables
   * @see https://eslint.org/docs/latest/rules/no-delete-var
   */
  'no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   * @see https://eslint.org/docs/latest/rules/no-div-regex
   */
  'no-div-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate arguments in `function` definitions
   * @see https://eslint.org/docs/latest/rules/no-dupe-args
   */
  'no-dupe-args'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate class members
   * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  'no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate conditions in if-else-if chains
   * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
   */
  'no-dupe-else-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate keys in object literals
   * @see https://eslint.org/docs/latest/rules/no-dupe-keys
   */
  'no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate case labels
   * @see https://eslint.org/docs/latest/rules/no-duplicate-case
   */
  'no-duplicate-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate module imports
   * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
   */
  'no-duplicate-imports'?: Linter.RuleEntry<NoDuplicateImports>
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   * @see https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return'?: Linter.RuleEntry<NoElseReturn>
  /**
   * Disallow empty block statements
   * @see https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty'?: Linter.RuleEntry<NoEmpty>
  /**
   * Disallow empty character classes in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-empty-character-class
   */
  'no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://eslint.org/docs/latest/rules/no-empty-function
   */
  'no-empty-function'?: Linter.RuleEntry<NoEmptyFunction>
  /**
   * Disallow empty destructuring patterns
   * @see https://eslint.org/docs/latest/rules/no-empty-pattern
   */
  'no-empty-pattern'?: Linter.RuleEntry<NoEmptyPattern>
  /**
   * Disallow empty static blocks
   * @see https://eslint.org/docs/latest/rules/no-empty-static-block
   */
  'no-empty-static-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow `null` comparisons without type-checking operators
   * @see https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`
   * @see https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval'?: Linter.RuleEntry<NoEval>
  /**
   * Disallow reassigning exceptions in `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-ex-assign
   */
  'no-ex-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow extending native types
   * @see https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native'?: Linter.RuleEntry<NoExtendNative>
  /**
   * Disallow unnecessary calls to `.bind()`
   * @see https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary boolean casts
   * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast'?: Linter.RuleEntry<NoExtraBooleanCast>
  /**
   * Disallow unnecessary labels
   * @see https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.org/docs/latest/rules/no-extra-parens
   * @deprecated
   */
  'no-extra-parens'?: Linter.RuleEntry<NoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.org/docs/latest/rules/no-extra-semi
   * @deprecated
   */
  'no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow fallthrough of `case` statements
   * @see https://eslint.org/docs/latest/rules/no-fallthrough
   */
  'no-fallthrough'?: Linter.RuleEntry<NoFallthrough>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.org/docs/latest/rules/no-floating-decimal
   * @deprecated
   */
  'no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning `function` declarations
   * @see https://eslint.org/docs/latest/rules/no-func-assign
   */
  'no-func-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign'?: Linter.RuleEntry<NoGlobalAssign>
  /**
   * Disallow shorthand type conversions
   * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion'?: Linter.RuleEntry<NoImplicitCoercion>
  /**
   * Disallow declarations in the global scope
   * @see https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals'?: Linter.RuleEntry<NoImplicitGlobals>
  /**
   * Disallow the use of `eval()`-like methods
   * @see https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to imported bindings
   * @see https://eslint.org/docs/latest/rules/no-import-assign
   */
  'no-import-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow inline comments after code
   * @see https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments'?: Linter.RuleEntry<NoInlineComments>
  /**
   * Disallow variable or `function` declarations in nested blocks
   * @see https://eslint.org/docs/latest/rules/no-inner-declarations
   */
  'no-inner-declarations'?: Linter.RuleEntry<NoInnerDeclarations>
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
   */
  'no-invalid-regexp'?: Linter.RuleEntry<NoInvalidRegexp>
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   * @see https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this'?: Linter.RuleEntry<NoInvalidThis>
  /**
   * Disallow irregular whitespace
   * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace'?: Linter.RuleEntry<NoIrregularWhitespace>
  /**
   * Disallow the use of the `__iterator__` property
   * @see https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator'?: Linter.RuleEntry<[]>
  /**
   * Disallow labels that share a name with a variable
   * @see https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow labeled statements
   * @see https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels'?: Linter.RuleEntry<NoLabels>
  /**
   * Disallow unnecessary nested blocks
   * @see https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   * @see https://eslint.org/docs/latest/rules/no-lonely-if
   */
  'no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   */
  'no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
   */
  'no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers'?: Linter.RuleEntry<NoMagicNumbers>
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
   */
  'no-misleading-character-class'?: Linter.RuleEntry<NoMisleadingCharacterClass>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.org/docs/latest/rules/no-mixed-operators
   * @deprecated
   */
  'no-mixed-operators'?: Linter.RuleEntry<NoMixedOperators>
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   * @see https://eslint.org/docs/latest/rules/no-mixed-requires
   * @deprecated
   */
  'no-mixed-requires'?: Linter.RuleEntry<NoMixedRequires>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
   * @deprecated
   */
  'no-mixed-spaces-and-tabs'?: Linter.RuleEntry<NoMixedSpacesAndTabs>
  /**
   * Disallow use of chained assignment expressions
   * @see https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign'?: Linter.RuleEntry<NoMultiAssign>
  /**
   * Disallow multiple spaces
   * @see https://eslint.org/docs/latest/rules/no-multi-spaces
   * @deprecated
   */
  'no-multi-spaces'?: Linter.RuleEntry<NoMultiSpaces>
  /**
   * Disallow multiline strings
   * @see https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
   * @deprecated
   */
  'no-multiple-empty-lines'?: Linter.RuleEntry<NoMultipleEmptyLines>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-native-reassign
   * @deprecated
   */
  'no-native-reassign'?: Linter.RuleEntry<NoNativeReassign>
  /**
   * Disallow negated conditions
   * @see https://eslint.org/docs/latest/rules/no-negated-condition
   */
  'no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand in `in` expressions
   * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
   * @deprecated
   */
  'no-negated-in-lhs'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions
   * @see https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators outside of assignments or comparisons
   * @see https://eslint.org/docs/latest/rules/no-new
   */
  'no-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Function` object
   * @see https://eslint.org/docs/latest/rules/no-new-func
   */
  'no-new-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with global non-constructor functions
   * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   */
  'no-new-native-nonconstructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` constructors
   * @see https://eslint.org/docs/latest/rules/no-new-object
   * @deprecated
   */
  'no-new-object'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with calls to `require`
   * @see https://eslint.org/docs/latest/rules/no-new-require
   * @deprecated
   */
  'no-new-require'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Symbol` object
   * @see https://eslint.org/docs/latest/rules/no-new-symbol
   * @deprecated
   */
  'no-new-symbol'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   * @see https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling global object properties as functions
   * @see https://eslint.org/docs/latest/rules/no-obj-calls
   */
  'no-obj-calls'?: Linter.RuleEntry<[]>
  /**
   * Disallow calls to the `Object` constructor without an argument
   * @see https://eslint.org/docs/latest/rules/no-object-constructor
   */
  'no-object-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal literals
   * @see https://eslint.org/docs/latest/rules/no-octal
   */
  'no-octal'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning function parameters
   * @see https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign'?: Linter.RuleEntry<NoParamReassign>
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   * @see https://eslint.org/docs/latest/rules/no-path-concat
   * @deprecated
   */
  'no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow the unary operators `++` and `--`
   * @see https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus'?: Linter.RuleEntry<NoPlusplus>
  /**
   * Disallow the use of `process.env`
   * @see https://eslint.org/docs/latest/rules/no-process-env
   * @deprecated
   */
  'no-process-env'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `process.exit()`
   * @see https://eslint.org/docs/latest/rules/no-process-exit
   * @deprecated
   */
  'no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning values from Promise executor functions
   * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
   */
  'no-promise-executor-return'?: Linter.RuleEntry<NoPromiseExecutorReturn>
  /**
   * Disallow the use of the `__proto__` property
   * @see https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
   */
  'no-prototype-builtins'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://eslint.org/docs/latest/rules/no-redeclare
   */
  'no-redeclare'?: Linter.RuleEntry<NoRedeclare>
  /**
   * Disallow multiple spaces in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-regex-spaces
   */
  'no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow specified names in exports
   * @see https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports'?: Linter.RuleEntry<NoRestrictedExports>
  /**
   * Disallow specified global variables
   * @see https://eslint.org/docs/latest/rules/no-restricted-globals
   */
  'no-restricted-globals'?: Linter.RuleEntry<NoRestrictedGlobals>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports'?: Linter.RuleEntry<NoRestrictedImports>
  /**
   * Disallow specified modules when loaded by `require`
   * @see https://eslint.org/docs/latest/rules/no-restricted-modules
   * @deprecated
   */
  'no-restricted-modules'?: Linter.RuleEntry<NoRestrictedModules>
  /**
   * Disallow certain properties on certain objects
   * @see https://eslint.org/docs/latest/rules/no-restricted-properties
   */
  'no-restricted-properties'?: Linter.RuleEntry<NoRestrictedProperties>
  /**
   * Disallow specified syntax
   * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax'?: Linter.RuleEntry<NoRestrictedSyntax>
  /**
   * Disallow assignment operators in `return` statements
   * @see https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign'?: Linter.RuleEntry<NoReturnAssign>
  /**
   * Disallow unnecessary `return await`
   * @see https://eslint.org/docs/latest/rules/no-return-await
   * @deprecated
   */
  'no-return-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs
   * @see https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-assign
   */
  'no-self-assign'?: Linter.RuleEntry<NoSelfAssign>
  /**
   * Disallow comparisons where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-compare
   */
  'no-self-compare'?: Linter.RuleEntry<[]>
  /**
   * Disallow comma operators
   * @see https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences'?: Linter.RuleEntry<NoSequences>
  /**
   * Disallow returning values from setters
   * @see https://eslint.org/docs/latest/rules/no-setter-return
   */
  'no-setter-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-shadow
   */
  'no-shadow'?: Linter.RuleEntry<NoShadow>
  /**
   * Disallow identifiers from shadowing restricted names
   * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names'?: Linter.RuleEntry<[]>
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   * @see https://eslint.org/docs/latest/rules/no-spaced-func
   * @deprecated
   */
  'no-spaced-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays
   * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
   */
  'no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * Disallow synchronous methods
   * @see https://eslint.org/docs/latest/rules/no-sync
   * @deprecated
   */
  'no-sync'?: Linter.RuleEntry<NoSync>
  /**
   * Disallow all tabs
   * @see https://eslint.org/docs/latest/rules/no-tabs
   * @deprecated
   */
  'no-tabs'?: Linter.RuleEntry<NoTabs>
  /**
   * Disallow template literal placeholder syntax in regular strings
   * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators
   * @see https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   * @see https://eslint.org/docs/latest/rules/no-this-before-super
   */
  'no-this-before-super'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing literals as exceptions
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal'?: Linter.RuleEntry<[]>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
   * @deprecated
   */
  'no-trailing-spaces'?: Linter.RuleEntry<NoTrailingSpaces>
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   * @see https://eslint.org/docs/latest/rules/no-undef
   */
  'no-undef'?: Linter.RuleEntry<NoUndef>
  /**
   * Disallow initializing variables to `undefined`
   * @see https://eslint.org/docs/latest/rules/no-undef-init
   */
  'no-undef-init'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `undefined` as an identifier
   * @see https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined'?: Linter.RuleEntry<[]>
  /**
   * Disallow dangling underscores in identifiers
   * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle'?: Linter.RuleEntry<NoUnderscoreDangle>
  /**
   * Disallow confusing multiline expressions
   * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
   */
  'no-unexpected-multiline'?: Linter.RuleEntry<[]>
  /**
   * Disallow unmodified loop conditions
   * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   */
  'no-unmodified-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators when simpler alternatives exist
   * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary'?: Linter.RuleEntry<NoUnneededTernary>
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   * @see https://eslint.org/docs/latest/rules/no-unreachable
   */
  'no-unreachable'?: Linter.RuleEntry<[]>
  /**
   * Disallow loops with a body that allows only one iteration
   * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
   */
  'no-unreachable-loop'?: Linter.RuleEntry<NoUnreachableLoop>
  /**
   * Disallow control flow statements in `finally` blocks
   * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
   */
  'no-unsafe-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand of relational operators
   * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
   */
  'no-unsafe-negation'?: Linter.RuleEntry<NoUnsafeNegation>
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   */
  'no-unsafe-optional-chaining'?: Linter.RuleEntry<NoUnsafeOptionalChaining>
  /**
   * Disallow unused expressions
   * @see https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions'?: Linter.RuleEntry<NoUnusedExpressions>
  /**
   * Disallow unused labels
   * @see https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused private class members
   * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
   */
  'no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars'?: Linter.RuleEntry<NoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define'?: Linter.RuleEntry<NoUseBeforeDefine>
  /**
   * Disallow variable assignments when the value is not used
   * @see https://eslint.org/docs/latest/rules/no-useless-assignment
   */
  'no-useless-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless backreferences in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-useless-backreference
   */
  'no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   * @see https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary computed property keys in objects and classes
   * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
   */
  'no-useless-computed-key'?: Linter.RuleEntry<NoUselessComputedKey>
  /**
   * Disallow unnecessary concatenation of literals or template literals
   * @see https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary constructors
   * @see https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary escape characters
   * @see https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   * @see https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename'?: Linter.RuleEntry<NoUselessRename>
  /**
   * Disallow redundant return statements
   * @see https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return'?: Linter.RuleEntry<[]>
  /**
   * Require `let` or `const` instead of `var`
   * @see https://eslint.org/docs/latest/rules/no-var
   */
  'no-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow `void` operators
   * @see https://eslint.org/docs/latest/rules/no-void
   */
  'no-void'?: Linter.RuleEntry<NoVoid>
  /**
   * Disallow specified warning terms in comments
   * @see https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments'?: Linter.RuleEntry<NoWarningComments>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
   * @deprecated
   */
  'no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Disallow `with` statements
   * @see https://eslint.org/docs/latest/rules/no-with
   */
  'no-with'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
   * @deprecated
   */
  'nonblock-statement-body-position'?: Linter.RuleEntry<NonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.org/docs/latest/rules/object-curly-newline
   * @deprecated
   */
  'object-curly-newline'?: Linter.RuleEntry<ObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.org/docs/latest/rules/object-curly-spacing
   * @deprecated
   */
  'object-curly-spacing'?: Linter.RuleEntry<ObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.org/docs/latest/rules/object-property-newline
   * @deprecated
   */
  'object-property-newline'?: Linter.RuleEntry<ObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals
   * @see https://eslint.org/docs/latest/rules/object-shorthand
   */
  'object-shorthand'?: Linter.RuleEntry<ObjectShorthand>
  /**
   * Enforce variables to be declared either together or separately in functions
   * @see https://eslint.org/docs/latest/rules/one-var
   */
  'one-var'?: Linter.RuleEntry<OneVar>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   * @deprecated
   */
  'one-var-declaration-per-line'?: Linter.RuleEntry<OneVarDeclarationPerLine>
  /**
   * Require or disallow assignment operator shorthand where possible
   * @see https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment'?: Linter.RuleEntry<OperatorAssignment>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.org/docs/latest/rules/operator-linebreak
   * @deprecated
   */
  'operator-linebreak'?: Linter.RuleEntry<OperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.org/docs/latest/rules/padded-blocks
   * @deprecated
   */
  'padded-blocks'?: Linter.RuleEntry<PaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
   * @deprecated
   */
  'padding-line-between-statements'?: Linter.RuleEntry<PaddingLineBetweenStatements>
  /**
   * Require using arrow functions for callbacks
   * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback'?: Linter.RuleEntry<PreferArrowCallback>
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   * @see https://eslint.org/docs/latest/rules/prefer-const
   */
  'prefer-const'?: Linter.RuleEntry<PreferConst>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring'?: Linter.RuleEntry<PreferDestructuring>
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using named capture group in regular expression
   * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
   */
  'prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
   * @see https://eslint.org/docs/latest/rules/prefer-object-spread
   */
  'prefer-object-spread'?: Linter.RuleEntry<[]>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors'?: Linter.RuleEntry<PreferPromiseRejectErrors>
  /**
   * Require `Reflect` methods where applicable
   * @see https://eslint.org/docs/latest/rules/prefer-reflect
   * @deprecated
   */
  'prefer-reflect'?: Linter.RuleEntry<PreferReflect>
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
   */
  'prefer-regex-literals'?: Linter.RuleEntry<PreferRegexLiterals>
  /**
   * Require rest parameters instead of `arguments`
   * @see https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params'?: Linter.RuleEntry<[]>
  /**
   * Require spread operators instead of `.apply()`
   * @see https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation
   * @see https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template'?: Linter.RuleEntry<[]>
  /**
   * Require quotes around object literal property names
   * @see https://eslint.org/docs/latest/rules/quote-props
   * @deprecated
   */
  'quote-props'?: Linter.RuleEntry<QuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.org/docs/latest/rules/quotes
   * @deprecated
   */
  'quotes'?: Linter.RuleEntry<Quotes>
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   * @see https://eslint.org/docs/latest/rules/radix
   */
  'radix'?: Linter.RuleEntry<Radix>
  /**
   * Surfaces diagnostics from React Forget
   */
  'react-compiler/react-compiler'?: Linter.RuleEntry<ReactCompilerReactCompiler>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<[]>
  /**
   * Enforces consistent naming for boolean props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md
   */
  'react/boolean-prop-naming'?: Linter.RuleEntry<ReactBooleanPropNaming>
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
   */
  'react/button-has-type'?: Linter.RuleEntry<ReactButtonHasType>
  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md
   */
  'react/checked-requires-onchange-or-readonly'?: Linter.RuleEntry<ReactCheckedRequiresOnchangeOrReadonly>
  /**
   * Enforce all defaultProps have a corresponding non-required PropType
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md
   */
  'react/default-props-match-prop-types'?: Linter.RuleEntry<ReactDefaultPropsMatchPropTypes>
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment'?: Linter.RuleEntry<ReactDestructuringAssignment>
  /**
   * Disallow missing displayName in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md
   */
  'react/display-name'?: Linter.RuleEntry<ReactDisplayName>
  /**
   * Disallow certain props on components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md
   */
  'react/forbid-component-props'?: Linter.RuleEntry<ReactForbidComponentProps>
  /**
   * Disallow certain props on DOM Nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md
   */
  'react/forbid-dom-props'?: Linter.RuleEntry<ReactForbidDomProps>
  /**
   * Disallow certain elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md
   */
  'react/forbid-elements'?: Linter.RuleEntry<ReactForbidElements>
  /**
   * Disallow using another component's propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md
   */
  'react/forbid-foreign-prop-types'?: Linter.RuleEntry<ReactForbidForeignPropTypes>
  /**
   * Disallow certain propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md
   */
  'react/forbid-prop-types'?: Linter.RuleEntry<ReactForbidPropTypes>
  /**
   * Require all forwardRef components include a ref parameter
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forward-ref-uses-ref.md
   */
  'react/forward-ref-uses-ref'?: Linter.RuleEntry<[]>
  /**
   * Enforce a specific function type for function components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
   */
  'react/function-component-definition'?: Linter.RuleEntry<ReactFunctionComponentDefinition>
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state'?: Linter.RuleEntry<ReactHookUseState>
  /**
   * Enforce sandbox attribute on iframe elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md
   */
  'react/iframe-missing-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Enforce boolean attributes notation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md
   */
  'react/jsx-boolean-value'?: Linter.RuleEntry<ReactJsxBooleanValue>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md
   */
  'react/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location'?: Linter.RuleEntry<ReactJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md
   */
  'react/jsx-closing-tag-location'?: Linter.RuleEntry<ReactJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence'?: Linter.RuleEntry<ReactJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md
   */
  'react/jsx-curly-newline'?: Linter.RuleEntry<ReactJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md
   */
  'react/jsx-curly-spacing'?: Linter.RuleEntry<ReactJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md
   */
  'react/jsx-equals-spacing'?: Linter.RuleEntry<ReactJsxEqualsSpacing>
  /**
   * Disallow file extensions that may contain JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension'?: Linter.RuleEntry<ReactJsxFilenameExtension>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
   */
  'react/jsx-first-prop-new-line'?: Linter.RuleEntry<ReactJsxFirstPropNewLine>
  /**
   * Enforce shorthand or standard form for React fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments'?: Linter.RuleEntry<ReactJsxFragments>
  /**
   * Enforce event handler naming conventions in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md
   */
  'react/jsx-handler-names'?: Linter.RuleEntry<ReactJsxHandlerNames>
  /**
   * Enforce JSX indentation
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
   */
  'react/jsx-indent'?: Linter.RuleEntry<ReactJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
   */
  'react/jsx-indent-props'?: Linter.RuleEntry<ReactJsxIndentProps>
  /**
   * Disallow missing `key` props in iterators/collection literals
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md
   */
  'react/jsx-key'?: Linter.RuleEntry<ReactJsxKey>
  /**
   * Enforce JSX maximum depth
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md
   */
  'react/jsx-max-depth'?: Linter.RuleEntry<ReactJsxMaxDepth>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
   */
  'react/jsx-max-props-per-line'?: Linter.RuleEntry<ReactJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md
   */
  'react/jsx-newline'?: Linter.RuleEntry<ReactJsxNewline>
  /**
   * Disallow `.bind()` or arrow functions in JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md
   */
  'react/jsx-no-bind'?: Linter.RuleEntry<ReactJsxNoBind>
  /**
   * Disallow comments from being inserted as text nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md
   */
  'react/jsx-no-constructed-context-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate properties in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md
   */
  'react/jsx-no-duplicate-props'?: Linter.RuleEntry<ReactJsxNoDuplicateProps>
  /**
   * Disallow problematic leaked values from being rendered
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render'?: Linter.RuleEntry<ReactJsxNoLeakedRender>
  /**
   * Disallow usage of string literals in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md
   */
  'react/jsx-no-literals'?: Linter.RuleEntry<ReactJsxNoLiterals>
  /**
   * Disallow usage of `javascript:` URLs
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
   */
  'react/jsx-no-script-url'?: Linter.RuleEntry<ReactJsxNoScriptUrl>
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
   */
  'react/jsx-no-target-blank'?: Linter.RuleEntry<ReactJsxNoTargetBlank>
  /**
   * Disallow undeclared variables in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md
   */
  'react/jsx-no-undef'?: Linter.RuleEntry<ReactJsxNoUndef>
  /**
   * Disallow unnecessary fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Require one JSX element per line
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line'?: Linter.RuleEntry<ReactJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md
   */
  'react/jsx-pascal-case'?: Linter.RuleEntry<ReactJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  'react/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading the same identifier multiple times
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spread-multi.md
   */
  'react/jsx-props-no-spread-multi'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md
   */
  'react/jsx-props-no-spreading'?: Linter.RuleEntry<ReactJsxPropsNoSpreading>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md
   * @deprecated
   */
  'react/jsx-sort-default-props'?: Linter.RuleEntry<ReactJsxSortDefaultProps>
  /**
   * Enforce props alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
   */
  'react/jsx-sort-props'?: Linter.RuleEntry<ReactJsxSortProps>
  /**
   * Enforce spacing before closing bracket in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md
   * @deprecated
   */
  'react/jsx-space-before-closing'?: Linter.RuleEntry<ReactJsxSpaceBeforeClosing>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md
   */
  'react/jsx-tag-spacing'?: Linter.RuleEntry<ReactJsxTagSpacing>
  /**
   * Disallow React to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md
   */
  'react/jsx-uses-react'?: Linter.RuleEntry<[]>
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md
   */
  'react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md
   */
  'react/jsx-wrap-multilines'?: Linter.RuleEntry<ReactJsxWrapMultilines>
  /**
   * Disallow when this.state is accessed within setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md
   */
  'react/no-adjacent-inline-elements'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of Array index in keys
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Lifecycle methods should be methods on the prototype, not class fields
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md
   */
  'react/no-arrow-function-lifecycle'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing of children as props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md
   */
  'react/no-children-prop'?: Linter.RuleEntry<ReactNoChildrenProp>
  /**
   * Disallow usage of dangerous JSX properties
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md
   */
  'react/no-danger'?: Linter.RuleEntry<ReactNoDanger>
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md
   */
  'react/no-danger-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of deprecated methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md
   */
  'react/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentDidMount
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md
   */
  'react/no-did-mount-set-state'?: Linter.RuleEntry<ReactNoDidMountSetState>
  /**
   * Disallow usage of setState in componentDidUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md
   */
  'react/no-did-update-set-state'?: Linter.RuleEntry<ReactNoDidUpdateSetState>
  /**
   * Disallow direct mutation of this.state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of findDOMNode
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md
   */
  'react/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of invalid attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md
   */
  'react/no-invalid-html-attribute'?: Linter.RuleEntry<ReactNoInvalidHtmlAttribute>
  /**
   * Disallow usage of isMounted
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md
   */
  'react/no-is-mounted'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple component definition per file
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md
   */
  'react/no-multi-comp'?: Linter.RuleEntry<ReactNoMultiComp>
  /**
   * Enforce that namespaces are not used in React elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md
   */
  'react/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of referential-type variables as default param in functional component
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md
   */
  'react/no-object-type-as-default-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of the return value of ReactDOM.render
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md
   */
  'react/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md
   */
  'react/no-set-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow using string references
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md
   */
  'react/no-string-refs'?: Linter.RuleEntry<ReactNoStringRefs>
  /**
   * Disallow `this` from being used in stateless functional components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md
   */
  'react/no-this-in-sfc'?: Linter.RuleEntry<[]>
  /**
   * Disallow common typos
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md
   */
  'react/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Disallow unescaped HTML entities from appearing in markup
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md
   */
  'react/no-unescaped-entities'?: Linter.RuleEntry<ReactNoUnescapedEntities>
  /**
   * Disallow usage of unknown DOM property
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md
   */
  'react/no-unknown-property'?: Linter.RuleEntry<ReactNoUnknownProperty>
  /**
   * Disallow usage of unsafe lifecycle methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md
   */
  'react/no-unsafe'?: Linter.RuleEntry<ReactNoUnsafe>
  /**
   * Disallow creating unstable components inside components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md
   */
  'react/no-unstable-nested-components'?: Linter.RuleEntry<ReactNoUnstableNestedComponents>
  /**
   * Disallow declaring unused methods of component class
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md
   */
  'react/no-unused-class-component-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow definitions of unused propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md
   */
  'react/no-unused-prop-types'?: Linter.RuleEntry<ReactNoUnusedPropTypes>
  /**
   * Disallow definitions of unused state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentWillUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
   */
  'react/no-will-update-set-state'?: Linter.RuleEntry<ReactNoWillUpdateSetState>
  /**
   * Enforce ES5 or ES6 class for React Components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md
   */
  'react/prefer-es6-class'?: Linter.RuleEntry<ReactPreferEs6Class>
  /**
   * Prefer exact proptype definitions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md
   */
  'react/prefer-exact-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce that props are read-only
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md
   */
  'react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce stateless components to be written as a pure function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md
   */
  'react/prefer-stateless-function'?: Linter.RuleEntry<ReactPreferStatelessFunction>
  /**
   * Disallow missing props validation in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
   */
  'react/prop-types'?: Linter.RuleEntry<ReactPropTypes>
  /**
   * Disallow missing React when using JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md
   */
  'react/react-in-jsx-scope'?: Linter.RuleEntry<[]>
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md
   */
  'react/require-default-props'?: Linter.RuleEntry<ReactRequireDefaultProps>
  /**
   * Enforce React components to have a shouldComponentUpdate method
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md
   */
  'react/require-optimization'?: Linter.RuleEntry<ReactRequireOptimization>
  /**
   * Enforce ES5 or ES6 class for returning value in render function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md
   */
  'react/require-render-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow extra closing tags for components without children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md
   */
  'react/self-closing-comp'?: Linter.RuleEntry<ReactSelfClosingComp>
  /**
   * Enforce component methods order
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md
   */
  'react/sort-comp'?: Linter.RuleEntry<ReactSortComp>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md
   */
  'react/sort-default-props'?: Linter.RuleEntry<ReactSortDefaultProps>
  /**
   * Enforce propTypes declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md
   */
  'react/sort-prop-types'?: Linter.RuleEntry<ReactSortPropTypes>
  /**
   * Enforce class component state initialization style
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor'?: Linter.RuleEntry<ReactStateInConstructor>
  /**
   * Enforces where React component static properties should be positioned.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md
   */
  'react/static-property-placement'?: Linter.RuleEntry<ReactStaticPropertyPlacement>
  /**
   * Enforce style prop value is an object
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md
   */
  'react/style-prop-object'?: Linter.RuleEntry<ReactStylePropObject>
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md
   */
  'react/void-dom-elements-no-children'?: Linter.RuleEntry<[]>
  /**
   * disallow confusing quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
   */
  'regexp/confusing-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent escaping of control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
   */
  'regexp/control-character-escape'?: Linter.RuleEntry<[]>
  /**
   * enforce single grapheme in string literal
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
   */
  'regexp/grapheme-string-literal'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of hexadecimal escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
   */
  'regexp/hexadecimal-escape'?: Linter.RuleEntry<RegexpHexadecimalEscape>
  /**
   * enforce into your favorite case
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
   */
  'regexp/letter-case'?: Linter.RuleEntry<RegexpLetterCase>
  /**
   * enforce match any character style
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
   */
  'regexp/match-any'?: Linter.RuleEntry<RegexpMatchAny>
  /**
   * enforce use of escapes on negation
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
   */
  'regexp/negation'?: Linter.RuleEntry<[]>
  /**
   * disallow elements that contradict assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
   */
  'regexp/no-contradiction-with-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
   */
  'regexp/no-control-character'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate characters in the RegExp character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
   */
  'regexp/no-dupe-characters-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate disjunctions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
   */
  'regexp/no-dupe-disjunctions'?: Linter.RuleEntry<RegexpNoDupeDisjunctions>
  /**
   * disallow alternatives without elements
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
   */
  'regexp/no-empty-alternative'?: Linter.RuleEntry<[]>
  /**
   * disallow capturing group that captures empty.
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
   */
  'regexp/no-empty-capturing-group'?: Linter.RuleEntry<[]>
  /**
   * disallow character classes that match no characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
   */
  'regexp/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow empty group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
   */
  'regexp/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * disallow empty lookahead assertion or empty lookbehind assertion
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
   */
  'regexp/no-empty-lookarounds-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow empty string literals in character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
   */
  'regexp/no-empty-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow escape backspace (`[\b]`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
   */
  'regexp/no-escape-backspace'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary nested lookaround assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
   */
  'regexp/no-extra-lookaround-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid regular expression strings in `RegExp` constructors
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
   */
  'regexp/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * disallow invisible raw character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
   */
  'regexp/no-invisible-character'?: Linter.RuleEntry<[]>
  /**
   * disallow lazy quantifiers at the end of an expression
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
   */
  'regexp/no-lazy-ends'?: Linter.RuleEntry<RegexpNoLazyEnds>
  /**
   * disallow legacy RegExp features
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
   */
  'regexp/no-legacy-features'?: Linter.RuleEntry<RegexpNoLegacyFeatures>
  /**
   * disallow capturing groups that do not behave as one would expect
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
   */
  'regexp/no-misleading-capturing-group'?: Linter.RuleEntry<RegexpNoMisleadingCapturingGroup>
  /**
   * disallow multi-code-point characters in character classes and quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
   */
  'regexp/no-misleading-unicode-character'?: Linter.RuleEntry<RegexpNoMisleadingUnicodeCharacter>
  /**
   * disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
   */
  'regexp/no-missing-g-flag'?: Linter.RuleEntry<RegexpNoMissingGFlag>
  /**
   * disallow non-standard flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
   */
  'regexp/no-non-standard-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow obscure character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
   */
  'regexp/no-obscure-range'?: Linter.RuleEntry<RegexpNoObscureRange>
  /**
   * disallow octal escape sequence
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
   */
  'regexp/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow optional assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
   */
  'regexp/no-optional-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow backreferences that reference a group that might not be matched
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
   */
  'regexp/no-potentially-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow standalone backslashes (`\`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
   */
  'regexp/no-standalone-backslash'?: Linter.RuleEntry<[]>
  /**
   * disallow exponential and polynomial backtracking
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
   */
  'regexp/no-super-linear-backtracking'?: Linter.RuleEntry<RegexpNoSuperLinearBacktracking>
  /**
   * disallow quantifiers that cause quadratic moves
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
   */
  'regexp/no-super-linear-move'?: Linter.RuleEntry<RegexpNoSuperLinearMove>
  /**
   * disallow trivially nested assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
   */
  'regexp/no-trivially-nested-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow nested quantifiers that can be rewritten as one quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
   */
  'regexp/no-trivially-nested-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unused capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
   */
  'regexp/no-unused-capturing-group'?: Linter.RuleEntry<RegexpNoUnusedCapturingGroup>
  /**
   * disallow assertions that are known to always accept (or reject)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
   */
  'regexp/no-useless-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow useless backreferences in regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
   */
  'regexp/no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow character class with one character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
   */
  'regexp/no-useless-character-class'?: Linter.RuleEntry<RegexpNoUselessCharacterClass>
  /**
   * disallow useless `$` replacements in replacement string
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
   */
  'regexp/no-useless-dollar-replacements'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape characters in RegExp
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
   */
  'regexp/no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary regex flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
   */
  'regexp/no-useless-flag'?: Linter.RuleEntry<RegexpNoUselessFlag>
  /**
   * disallow unnecessarily non-greedy quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
   */
  'regexp/no-useless-lazy'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary non-capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
   */
  'regexp/no-useless-non-capturing-group'?: Linter.RuleEntry<RegexpNoUselessNonCapturingGroup>
  /**
   * disallow quantifiers that can be removed
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
   */
  'regexp/no-useless-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
   */
  'regexp/no-useless-range'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary elements in expression character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
   */
  'regexp/no-useless-set-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow string disjunction of single characters in `\q{...}`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
   */
  'regexp/no-useless-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `{n,m}` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
   */
  'regexp/no-useless-two-nums-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow quantifiers with a maximum of zero
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
   */
  'regexp/no-zero-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow the alternatives of lookarounds that end with a non-constant quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
   */
  'regexp/optimal-lookaround-quantifier'?: Linter.RuleEntry<[]>
  /**
   * require optimal quantifiers for concatenated quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
   */
  'regexp/optimal-quantifier-concatenation'?: Linter.RuleEntry<RegexpOptimalQuantifierConcatenation>
  /**
   * enforce using character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
   */
  'regexp/prefer-character-class'?: Linter.RuleEntry<RegexpPreferCharacterClass>
  /**
   * enforce using `\d`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
   */
  'regexp/prefer-d'?: Linter.RuleEntry<RegexpPreferD>
  /**
   * enforces escape of replacement `$` character (`$$`).
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
   */
  'regexp/prefer-escape-replacement-dollar-char'?: Linter.RuleEntry<[]>
  /**
   * prefer lookarounds over capturing group that do not replace
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
   */
  'regexp/prefer-lookaround'?: Linter.RuleEntry<RegexpPreferLookaround>
  /**
   * enforce using named backreferences
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
   */
  'regexp/prefer-named-backreference'?: Linter.RuleEntry<[]>
  /**
   * enforce using named capture groups
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
   */
  'regexp/prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * enforce using named replacement
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
   */
  'regexp/prefer-named-replacement'?: Linter.RuleEntry<RegexpPreferNamedReplacement>
  /**
   * enforce using `+` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
   */
  'regexp/prefer-plus-quantifier'?: Linter.RuleEntry<[]>
  /**
   * prefer predefined assertion over equivalent lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
   */
  'regexp/prefer-predefined-assertion'?: Linter.RuleEntry<[]>
  /**
   * enforce using quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
   */
  'regexp/prefer-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using `?` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
   */
  'regexp/prefer-question-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using character class range
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
   */
  'regexp/prefer-range'?: Linter.RuleEntry<RegexpPreferRange>
  /**
   * enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
   */
  'regexp/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * enforce that `RegExp#test` is used instead of `String#match` and `RegExp#exec`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
   */
  'regexp/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * enforce using result array `groups`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
   */
  'regexp/prefer-result-array-groups'?: Linter.RuleEntry<RegexpPreferResultArrayGroups>
  /**
   * prefer character class set operations instead of lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
   */
  'regexp/prefer-set-operation'?: Linter.RuleEntry<[]>
  /**
   * enforce using `*` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
   */
  'regexp/prefer-star-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce use of unicode codepoint escapes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
   */
  'regexp/prefer-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * enforce using `\w`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
   */
  'regexp/prefer-w'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `u` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
   */
  'regexp/require-unicode-regexp'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `v` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html
   */
  'regexp/require-unicode-sets-regexp'?: Linter.RuleEntry<[]>
  /**
   * require simplify set operations
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
   */
  'regexp/simplify-set-operations'?: Linter.RuleEntry<[]>
  /**
   * sort alternatives if order doesn't matter
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
   */
  'regexp/sort-alternatives'?: Linter.RuleEntry<[]>
  /**
   * enforces elements order in character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
   */
  'regexp/sort-character-class-elements'?: Linter.RuleEntry<RegexpSortCharacterClassElements>
  /**
   * require regex flags to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
   */
  'regexp/sort-flags'?: Linter.RuleEntry<[]>
  /**
   * disallow not strictly valid regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
   */
  'regexp/strict'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of unicode escape or unicode codepoint escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
   */
  'regexp/unicode-escape'?: Linter.RuleEntry<RegexpUnicodeEscape>
  /**
   * enforce consistent naming of unicode properties
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html
   */
  'regexp/unicode-property'?: Linter.RuleEntry<RegexpUnicodeProperty>
  /**
   * use the `i` flag if it simplifies the pattern
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
   */
  'regexp/use-ignore-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   * @see https://eslint.org/docs/latest/rules/require-atomic-updates
   */
  'require-atomic-updates'?: Linter.RuleEntry<RequireAtomicUpdates>
  /**
   * Disallow async functions which have no `await` expression
   * @see https://eslint.org/docs/latest/rules/require-await
   */
  'require-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `u` or `v` flag on regular expressions
   * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
   */
  'require-unicode-regexp'?: Linter.RuleEntry<RequireUnicodeRegexp>
  /**
   * Require generator functions to contain `yield`
   * @see https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield'?: Linter.RuleEntry<[]>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
   * @deprecated
   */
  'rest-spread-spacing'?: Linter.RuleEntry<RestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.org/docs/latest/rules/semi
   * @deprecated
   */
  'semi'?: Linter.RuleEntry<Semi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.org/docs/latest/rules/semi-spacing
   * @deprecated
   */
  'semi-spacing'?: Linter.RuleEntry<SemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.org/docs/latest/rules/semi-style
   * @deprecated
   */
  'semi-style'?: Linter.RuleEntry<SemiStyle>
  /**
   * Enforce sorted `import` declarations within modules
   * @see https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports'?: Linter.RuleEntry<SortImports>
  /**
   * Require object keys to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-keys
   */
  'sort-keys'?: Linter.RuleEntry<SortKeys>
  /**
   * Require variables within the same declaration block to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-vars
   */
  'sort-vars'?: Linter.RuleEntry<SortVars>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.org/docs/latest/rules/space-before-blocks
   * @deprecated
   */
  'space-before-blocks'?: Linter.RuleEntry<SpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   * @see https://eslint.org/docs/latest/rules/space-before-function-paren
   * @deprecated
   */
  'space-before-function-paren'?: Linter.RuleEntry<SpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.org/docs/latest/rules/space-in-parens
   * @deprecated
   */
  'space-in-parens'?: Linter.RuleEntry<SpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.org/docs/latest/rules/space-infix-ops
   * @deprecated
   */
  'space-infix-ops'?: Linter.RuleEntry<SpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.org/docs/latest/rules/space-unary-ops
   * @deprecated
   */
  'space-unary-ops'?: Linter.RuleEntry<SpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.org/docs/latest/rules/spaced-comment
   * @deprecated
   */
  'spaced-comment'?: Linter.RuleEntry<SpacedComment>
  /**
   * Require or disallow strict mode directives
   * @see https://eslint.org/docs/latest/rules/strict
   */
  'strict'?: Linter.RuleEntry<Strict>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
   * @deprecated
   */
  'switch-colon-spacing'?: Linter.RuleEntry<SwitchColonSpacing>
  /**
   * Require symbol descriptions
   * @see https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.org/docs/latest/rules/template-curly-spacing
   * @deprecated
   */
  'template-curly-spacing'?: Linter.RuleEntry<TemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.org/docs/latest/rules/template-tag-spacing
   * @deprecated
   */
  'template-tag-spacing'?: Linter.RuleEntry<TemplateTagSpacing>
  /**
   * Require or disallow Unicode byte order mark (BOM)
   * @see https://eslint.org/docs/latest/rules/unicode-bom
   */
  'unicode-bom'?: Linter.RuleEntry<UnicodeBom>
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/better-regex.md
   */
  'unicorn/better-regex'?: Linter.RuleEntry<UnicornBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-assert.md
   */
  'unicorn/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-date-clone.md
   */
  'unicorn/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<UnicornEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-accessor-recursion.md
   */
  'unicorn/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-for-each.md
   */
  'unicorn/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-push-push.md
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<UnicornNoArrayPushPush>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-hex-escape.md
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-instanceof-builtins.md
   */
  'unicorn/no-instanceof-builtins'?: Linter.RuleEntry<UnicornNoInstanceofBuiltins>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-length-as-slice-end.md
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-named-default.md
   */
  'unicorn/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<UnicornNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<UnicornPreventAbbreviations>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<[]>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
   */
  'unused-imports/no-unused-imports'?: Linter.RuleEntry<UnusedImportsNoUnusedImports>
  /**
   * Disallow unused variables
   * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md
   */
  'unused-imports/no-unused-vars'?: Linter.RuleEntry<UnusedImportsNoUnusedVars>
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   * @see https://eslint.org/docs/latest/rules/use-isnan
   */
  'use-isnan'?: Linter.RuleEntry<UseIsnan>
  /**
   * Enforce comparing `typeof` expressions against valid strings
   * @see https://eslint.org/docs/latest/rules/valid-typeof
   */
  'valid-typeof'?: Linter.RuleEntry<ValidTypeof>
  /**
   * Require `var` declarations be placed at the top of their containing scope
   * @see https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top'?: Linter.RuleEntry<[]>
  /**
   * require .spec test file pattern
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
   */
  'vitest/consistent-test-filename'?: Linter.RuleEntry<VitestConsistentTestFilename>
  /**
   * enforce using test or it but not both
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
   */
  'vitest/consistent-test-it'?: Linter.RuleEntry<VitestConsistentTestIt>
  /**
   * enforce having expectation in test body
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
   */
  'vitest/expect-expect'?: Linter.RuleEntry<VitestExpectExpect>
  /**
   * enforce a maximum number of expect per test
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
   */
  'vitest/max-expects'?: Linter.RuleEntry<VitestMaxExpects>
  /**
   * require describe block to be less than set max value or default value
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
   */
  'vitest/max-nested-describe'?: Linter.RuleEntry<VitestMaxNestedDescribe>
  /**
   * disallow alias methods
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
   */
  'vitest/no-alias-methods'?: Linter.RuleEntry<[]>
  /**
   * disallow commented out tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
   */
  'vitest/no-commented-out-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional expects
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
   */
  'vitest/no-conditional-expect'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
   */
  'vitest/no-conditional-in-test'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
   */
  'vitest/no-conditional-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow disabled tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
   */
  'vitest/no-disabled-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow using a callback in asynchronous tests and hooks
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
   * @deprecated
   */
  'vitest/no-done-callback'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate hooks and teardown hooks
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
   */
  'vitest/no-duplicate-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow focused tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
   */
  'vitest/no-focused-tests'?: Linter.RuleEntry<VitestNoFocusedTests>
  /**
   * disallow setup and teardown hooks
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
   */
  'vitest/no-hooks'?: Linter.RuleEntry<VitestNoHooks>
  /**
   * disallow identical titles
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
   */
  'vitest/no-identical-title'?: Linter.RuleEntry<[]>
  /**
   * disallow importing `node:test`
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
   */
  'vitest/no-import-node-test'?: Linter.RuleEntry<[]>
  /**
   * disallow string interpolation in snapshots
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
   */
  'vitest/no-interpolation-in-snapshots'?: Linter.RuleEntry<[]>
  /**
   * disallow large snapshots
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
   */
  'vitest/no-large-snapshots'?: Linter.RuleEntry<VitestNoLargeSnapshots>
  /**
   * disallow importing from __mocks__ directory
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
   */
  'vitest/no-mocks-import'?: Linter.RuleEntry<[]>
  /**
   * disallow .only blocks in tests
   * @see https://github.com/levibuzolic/eslint-plugin-no-only-tests
   */
  'vitest/no-only-tests'?: Linter.RuleEntry<VitestNoOnlyTests>
  /**
   * disallow the use of certain matchers
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
   */
  'vitest/no-restricted-matchers'?: Linter.RuleEntry<VitestNoRestrictedMatchers>
  /**
   * disallow specific `vi.` methods
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
   */
  'vitest/no-restricted-vi-methods'?: Linter.RuleEntry<VitestNoRestrictedViMethods>
  /**
   * disallow using `expect` outside of `it` or `test` blocks
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
   */
  'vitest/no-standalone-expect'?: Linter.RuleEntry<VitestNoStandaloneExpect>
  /**
   * disallow using `test` as a prefix
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
   */
  'vitest/no-test-prefixes'?: Linter.RuleEntry<[]>
  /**
   * disallow return statements in tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
   */
  'vitest/no-test-return-statement'?: Linter.RuleEntry<[]>
  /**
   * enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
   */
  'vitest/prefer-called-with'?: Linter.RuleEntry<[]>
  /**
   * enforce using the built-in comparison matchers
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
   */
  'vitest/prefer-comparison-matcher'?: Linter.RuleEntry<[]>
  /**
   * enforce using `each` rather than manual loops
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
   */
  'vitest/prefer-each'?: Linter.RuleEntry<[]>
  /**
   * enforce using the built-in quality matchers
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
   */
  'vitest/prefer-equality-matcher'?: Linter.RuleEntry<[]>
  /**
   * enforce using expect assertions instead of callbacks
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
   */
  'vitest/prefer-expect-assertions'?: Linter.RuleEntry<VitestPreferExpectAssertions>
  /**
   * enforce using `expect().resolves` over `expect(await ...)` syntax
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
   */
  'vitest/prefer-expect-resolves'?: Linter.RuleEntry<[]>
  /**
   * enforce having hooks in consistent order
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
   */
  'vitest/prefer-hooks-in-order'?: Linter.RuleEntry<[]>
  /**
   * enforce having hooks before any test cases
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
   */
  'vitest/prefer-hooks-on-top'?: Linter.RuleEntry<[]>
  /**
   * enforce lowercase titles
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
   */
  'vitest/prefer-lowercase-title'?: Linter.RuleEntry<VitestPreferLowercaseTitle>
  /**
   * enforce mock resolved/rejected shorthands for promises
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
   */
  'vitest/prefer-mock-promise-shorthand'?: Linter.RuleEntry<[]>
  /**
   * enforce including a hint with external snapshots
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
   */
  'vitest/prefer-snapshot-hint'?: Linter.RuleEntry<VitestPreferSnapshotHint>
  /**
   * enforce using `vi.spyOn`
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
   */
  'vitest/prefer-spy-on'?: Linter.RuleEntry<[]>
  /**
   * enforce strict equal over equal
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
   */
  'vitest/prefer-strict-equal'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBe()
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
   */
  'vitest/prefer-to-be'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBeFalsy()
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
   */
  'vitest/prefer-to-be-falsy'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBeObject()
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
   */
  'vitest/prefer-to-be-object'?: Linter.RuleEntry<[]>
  /**
   * enforce using `toBeTruthy`
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
   */
  'vitest/prefer-to-be-truthy'?: Linter.RuleEntry<[]>
  /**
   * enforce using toContain()
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
   */
  'vitest/prefer-to-contain'?: Linter.RuleEntry<[]>
  /**
   * enforce using toHaveLength()
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
   */
  'vitest/prefer-to-have-length'?: Linter.RuleEntry<[]>
  /**
   * enforce using `test.todo`
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
   */
  'vitest/prefer-todo'?: Linter.RuleEntry<[]>
  /**
   * require setup and teardown to be within a hook
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
   */
  'vitest/require-hook'?: Linter.RuleEntry<VitestRequireHook>
  /**
   * require local Test Context for concurrent snapshot tests
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
   */
  'vitest/require-local-test-context-for-concurrent-snapshots'?: Linter.RuleEntry<[]>
  /**
   * require toThrow() to be called with an error message
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
   */
  'vitest/require-to-throw-message'?: Linter.RuleEntry<[]>
  /**
   * enforce that all tests are in a top-level describe
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
   */
  'vitest/require-top-level-describe'?: Linter.RuleEntry<VitestRequireTopLevelDescribe>
  /**
   * enforce valid describe callback
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
   */
  'vitest/valid-describe-callback'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `expect()` usage
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
   */
  'vitest/valid-expect'?: Linter.RuleEntry<VitestValidExpect>
  /**
   * enforce valid titles
   * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
   */
  'vitest/valid-title'?: Linter.RuleEntry<VitestValidTitle>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.org/docs/latest/rules/wrap-iife
   * @deprecated
   */
  'wrap-iife'?: Linter.RuleEntry<WrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.org/docs/latest/rules/wrap-regex
   * @deprecated
   */
  'wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.org/docs/latest/rules/yield-star-spacing
   * @deprecated
   */
  'yield-star-spacing'?: Linter.RuleEntry<YieldStarSpacing>
  /**
   * Require or disallow "Yoda" conditions
   * @see https://eslint.org/docs/latest/rules/yoda
   */
  'yoda'?: Linter.RuleEntry<Yoda>
}

/* ======= Declarations ======= */
// ----- @typescript-eslint/array-type -----
type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    accessors?: ("explicit" | "no-public" | "off")
    constructors?: ("explicit" | "no-public" | "off")
    methods?: ("explicit" | "no-public" | "off")
    parameterProperties?: ("explicit" | "no-public" | "off")
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
type TypescriptEslintMemberOrdering = []|[{
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
type TypescriptEslintNoBaseToString = []|[{
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unused-expressions -----
type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-var-requires -----
type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
  [k: string]: unknown | undefined
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
    [k: string]: unknown | undefined
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- accessor-pairs -----
type AccessorPairs = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
}]
// ----- array-bracket-newline -----
type ArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- array-bracket-spacing -----
type ArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- array-callback-return -----
type ArrayCallbackReturn = []|[{
  allowImplicit?: boolean
  checkForEach?: boolean
  allowVoid?: boolean
}]
// ----- array-element-newline -----
type ArrayElementNewline = []|[(_ArrayElementNewlineBasicConfig | {
  ArrayExpression?: _ArrayElementNewlineBasicConfig
  ArrayPattern?: _ArrayElementNewlineBasicConfig
})]
type _ArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- arrow-body-style -----
type ArrowBodyStyle = ([]|[("always" | "never")] | []|["as-needed"]|["as-needed", {
  requireReturnForObjectLiteral?: boolean
}])
// ----- arrow-parens -----
type ArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- arrow-spacing -----
type ArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- block-spacing -----
type BlockSpacing = []|[("always" | "never")]
// ----- brace-style -----
type BraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- callback-return -----
type CallbackReturn = []|[string[]]
// ----- camelcase -----
type Camelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- capitalized-comments -----
type CapitalizedComments = []|[("always" | "never")]|[("always" | "never"), ({
  ignorePattern?: string
  ignoreInlineComments?: boolean
  ignoreConsecutiveComments?: boolean
} | {
  line?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
  block?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
})]
// ----- class-methods-use-this -----
type ClassMethodsUseThis = []|[{
  exceptMethods?: string[]
  enforceForClassFields?: boolean
  ignoreOverrideMethods?: boolean
  ignoreClassesWithImplements?: ("all" | "public-fields")
}]
// ----- comma-dangle -----
type CommaDangle = []|[(_CommaDangleValue | {
  arrays?: _CommaDangleValueWithIgnore
  objects?: _CommaDangleValueWithIgnore
  imports?: _CommaDangleValueWithIgnore
  exports?: _CommaDangleValueWithIgnore
  functions?: _CommaDangleValueWithIgnore
})]
type _CommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _CommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- comma-spacing -----
type CommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- comma-style -----
type CommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- complexity -----
type Complexity = []|[(number | {
  maximum?: number
  max?: number
  variant?: ("classic" | "modified")
})]
// ----- computed-property-spacing -----
type ComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- consistent-return -----
type ConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- consistent-this -----
type ConsistentThis = string[]
// ----- curly -----
type Curly = ([]|["all"] | []|[("multi" | "multi-line" | "multi-or-nest")]|[("multi" | "multi-line" | "multi-or-nest"), "consistent"])
// ----- default-case -----
type DefaultCase = []|[{
  commentPattern?: string
}]
// ----- dot-location -----
type DotLocation = []|[("object" | "property")]
// ----- dot-notation -----
type DotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- eol-last -----
type EolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- eqeqeq -----
type Eqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- func-call-spacing -----
type FuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])
// ----- func-name-matching -----
type FuncNameMatching = ([]|[("always" | "never")]|[("always" | "never"), {
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}] | []|[{
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}])
// ----- func-names -----
type FuncNames = []|[_FuncNamesValue]|[_FuncNamesValue, {
  generators?: _FuncNamesValue
}]
type _FuncNamesValue = ("always" | "as-needed" | "never")
// ----- func-style -----
type FuncStyle = []|[("declaration" | "expression")]|[("declaration" | "expression"), {
  allowArrowFunctions?: boolean
  overrides?: {
    namedExports?: ("declaration" | "expression" | "ignore")
  }
}]
// ----- function-call-argument-newline -----
type FunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- function-paren-newline -----
type FunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- generator-star-spacing -----
type GeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- getter-return -----
type GetterReturn = []|[{
  allowImplicit?: boolean
}]
// ----- grouped-accessor-pairs -----
type GroupedAccessorPairs = []|[("anyOrder" | "getBeforeSet" | "setBeforeGet")]
// ----- handle-callback-err -----
type HandleCallbackErr = []|[string]
// ----- id-blacklist -----
type IdBlacklist = string[]
// ----- id-denylist -----
type IdDenylist = string[]
// ----- id-length -----
type IdLength = []|[{
  min?: number
  max?: number
  exceptions?: string[]
  exceptionPatterns?: string[]
  properties?: ("always" | "never")
}]
// ----- id-match -----
type IdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
}]
// ----- implicit-arrow-linebreak -----
type ImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- import-x/consistent-type-specifier-style -----
type ImportXConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]
// ----- import-x/dynamic-import-chunkname -----
type ImportXDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import-x/extensions -----
type ImportXExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  [k: string]: unknown | undefined
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import-x/first -----
type ImportXFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import-x/imports-first -----
type ImportXImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import-x/max-dependencies -----
type ImportXMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import-x/named -----
type ImportXNamed = []|[{
  commonjs?: boolean
}]
// ----- import-x/namespace -----
type ImportXNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import-x/newline-after-import -----
type ImportXNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import-x/no-absolute-path -----
type ImportXNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-anonymous-default-export -----
type ImportXNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import-x/no-commonjs -----
type ImportXNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import-x/no-cycle -----
type ImportXNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
}]
// ----- import-x/no-duplicates -----
type ImportXNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import-x/no-dynamic-require -----
type ImportXNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import-x/no-extraneous-dependencies -----
type ImportXNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
  whitelist?: unknown[]
}]
// ----- import-x/no-import-module-exports -----
type ImportXNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import-x/no-internal-modules -----
type ImportXNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import-x/no-namespace -----
type ImportXNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import-x/no-nodejs-modules -----
type ImportXNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import-x/no-relative-packages -----
type ImportXNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-relative-parent-imports -----
type ImportXNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-rename-default -----
type ImportXNoRenameDefault = []|[{
  commonjs?: boolean
  preventRenamingBindings?: boolean
}]
// ----- import-x/no-restricted-paths -----
type ImportXNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import-x/no-unassigned-import -----
type ImportXNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import-x/no-unresolved -----
type ImportXNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import-x/no-unused-modules -----
type ImportXNoUnusedModules = []|[({
  unusedExports: true
  
  src?: [unknown, ...(unknown)[]]
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import-x/no-useless-path-segments -----
type ImportXNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import-x/order -----
type ImportXOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import-x/prefer-default-export -----
type ImportXPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]
// ----- indent -----
type Indent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- indent-legacy -----
type IndentLegacy = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: unknown | undefined
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  FunctionExpression?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  CallExpression?: {
    parameters?: (number | "first")
    [k: string]: unknown | undefined
  }
  ArrayExpression?: (number | "first")
  ObjectExpression?: (number | "first")
}]
// ----- init-declarations -----
type InitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- jsx-a11y/accessible-emoji -----
type JsxA11YAccessibleEmoji = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/alt-text -----
type JsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-ambiguous-text -----
type JsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-has-content -----
type JsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-is-valid -----
type JsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-activedescendant-has-tabindex -----
type JsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-props -----
type JsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-proptypes -----
type JsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-role -----
type JsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-unsupported-elements -----
type JsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/autocomplete-valid -----
type JsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/click-events-have-key-events -----
type JsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/control-has-associated-label -----
type JsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/heading-has-content -----
type JsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/html-has-lang -----
type JsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/iframe-has-title -----
type JsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/img-redundant-alt -----
type JsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/interactive-supports-focus -----
type JsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-associated-control -----
type JsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-for -----
type JsxA11YLabelHasFor = []|[{
  components?: string[]
  required?: (("nesting" | "id") | {
    
    some: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  } | {
    
    every: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  })
  allowChildren?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/lang -----
type JsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/media-has-caption -----
type JsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/mouse-events-have-key-events -----
type JsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-access-key -----
type JsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-aria-hidden-on-focusable -----
type JsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-autofocus -----
type JsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-distracting-elements -----
type JsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-interactive-element-to-noninteractive-role -----
type JsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-interactions -----
type JsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-to-interactive-role -----
type JsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-tabindex -----
type JsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-onchange -----
type JsxA11YNoOnchange = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-redundant-roles -----
type JsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-static-element-interactions -----
type JsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/prefer-tag-over-role -----
type JsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-has-required-aria-props -----
type JsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-supports-aria-props -----
type JsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/scope -----
type JsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/tabindex-no-positive -----
type JsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-quotes -----
type JsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- key-spacing -----
type KeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- keyword-spacing -----
type KeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- line-comment-position -----
type LineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- linebreak-style -----
type LinebreakStyle = []|[("unix" | "windows")]
// ----- lines-around-comment -----
type LinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- lines-around-directive -----
type LinesAroundDirective = []|[(("always" | "never") | {
  before?: ("always" | "never")
  after?: ("always" | "never")
})]
// ----- lines-between-class-members -----
type LinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
}]
// ----- logical-assignment-operators -----
type LogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- max-classes-per-file -----
type MaxClassesPerFile = []|[(number | {
  ignoreExpressions?: boolean
  max?: number
})]
// ----- max-depth -----
type MaxDepth = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-len -----
type MaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- max-lines -----
type MaxLines = []|[(number | {
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
})]
// ----- max-lines-per-function -----
type MaxLinesPerFunction = []|[({
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
  IIFEs?: boolean
} | number)]
// ----- max-nested-callbacks -----
type MaxNestedCallbacks = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-params -----
type MaxParams = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-statements -----
type MaxStatements = []|[(number | {
  maximum?: number
  max?: number
})]|[(number | {
  maximum?: number
  max?: number
}), {
  ignoreTopLevelFunctions?: boolean
}]
// ----- max-statements-per-line -----
type MaxStatementsPerLine = []|[{
  max?: number
}]
// ----- multiline-comment-style -----
type MultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- multiline-ternary -----
type MultilineTernary = []|[("always" | "always-multiline" | "never")]
// ----- n/callback-return -----
type NCallbackReturn = []|[string[]]
// ----- n/exports-style -----
type NExportsStyle = []|[("module.exports" | "exports")]|[("module.exports" | "exports"), {
  allowBatchAssign?: boolean
}]
// ----- n/file-extension-in-import -----
type NFileExtensionInImport = []|[("always" | "never")]|[("always" | "never"), {
  [k: string]: ("always" | "never") | undefined
}]
// ----- n/handle-callback-err -----
type NHandleCallbackErr = []|[string]
// ----- n/hashbang -----
type NHashbang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- n/no-deprecated-api -----
type NNoDeprecatedApi = []|[{
  version?: string
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
  ignoreGlobalItems?: ("Buffer()" | "new Buffer()" | "COUNTER_NET_SERVER_CONNECTION" | "COUNTER_NET_SERVER_CONNECTION_CLOSE" | "COUNTER_HTTP_SERVER_REQUEST" | "COUNTER_HTTP_SERVER_RESPONSE" | "COUNTER_HTTP_CLIENT_REQUEST" | "COUNTER_HTTP_CLIENT_RESPONSE" | "GLOBAL" | "Intl.v8BreakIterator" | "require.extensions" | "root" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport")[]
  ignoreIndirectDependencies?: boolean
}]
// ----- n/no-extraneous-import -----
type NNoExtraneousImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
}]
// ----- n/no-extraneous-require -----
type NNoExtraneousRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
}]
// ----- n/no-hide-core-modules -----
type NNoHideCoreModules = []|[{
  allow?: ("assert" | "buffer" | "child_process" | "cluster" | "console" | "constants" | "crypto" | "dgram" | "dns" | "events" | "fs" | "http" | "https" | "module" | "net" | "os" | "path" | "querystring" | "readline" | "repl" | "stream" | "string_decoder" | "timers" | "tls" | "tty" | "url" | "util" | "vm" | "zlib")[]
  ignoreDirectDependencies?: boolean
  ignoreIndirectDependencies?: boolean
}]
// ----- n/no-missing-import -----
type NNoMissingImport = []|[{
  allowModules?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  tsconfigPath?: string
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
}]
// ----- n/no-missing-require -----
type NNoMissingRequire = []|[{
  allowModules?: string[]
  tryExtensions?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
  tsconfigPath?: string
}]
// ----- n/no-mixed-requires -----
type NNoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- n/no-process-env -----
type NNoProcessEnv = []|[{
  allowedVariables?: string[]
}]
// ----- n/no-restricted-import -----
type NNoRestrictedImport = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- n/no-restricted-require -----
type NNoRestrictedRequire = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- n/no-sync -----
type NNoSync = []|[{
  allowAtRootLevel?: boolean
  ignores?: string[]
}]
// ----- n/no-unpublished-bin -----
type NNoUnpublishedBin = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  [k: string]: unknown | undefined
}]
// ----- n/no-unpublished-import -----
type NNoUnpublishedImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  ignoreTypeImport?: boolean
  ignorePrivate?: boolean
}]
// ----- n/no-unpublished-require -----
type NNoUnpublishedRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignorePrivate?: boolean
}]
// ----- n/no-unsupported-features/es-builtins -----
type NNoUnsupportedFeaturesEsBuiltins = []|[{
  version?: string
  ignores?: ("AggregateError" | "Array" | "Array.from" | "Array.isArray" | "Array.length" | "Array.of" | "Array.toLocaleString" | "ArrayBuffer" | "ArrayBuffer.isView" | "Atomics" | "Atomics.add" | "Atomics.and" | "Atomics.compareExchange" | "Atomics.exchange" | "Atomics.isLockFree" | "Atomics.load" | "Atomics.notify" | "Atomics.or" | "Atomics.store" | "Atomics.sub" | "Atomics.wait" | "Atomics.waitAsync" | "Atomics.xor" | "BigInt" | "BigInt.asIntN" | "BigInt.asUintN" | "BigInt64Array" | "BigInt64Array.BYTES_PER_ELEMENT" | "BigInt64Array.from" | "BigInt64Array.name" | "BigInt64Array.of" | "BigUint64Array" | "BigUint64Array.BYTES_PER_ELEMENT" | "BigUint64Array.from" | "BigUint64Array.name" | "BigUint64Array.of" | "Boolean" | "DataView" | "Date" | "Date.UTC" | "Date.now" | "Date.parse" | "Date.toLocaleDateString" | "Date.toLocaleString" | "Date.toLocaleTimeString" | "Error" | "Error.cause" | "EvalError" | "FinalizationRegistry" | "Float32Array" | "Float32Array.BYTES_PER_ELEMENT" | "Float32Array.from" | "Float32Array.name" | "Float32Array.of" | "Float64Array" | "Float64Array.BYTES_PER_ELEMENT" | "Float64Array.from" | "Float64Array.name" | "Float64Array.of" | "Function" | "Function.length" | "Function.name" | "Infinity" | "Int16Array" | "Int16Array.BYTES_PER_ELEMENT" | "Int16Array.from" | "Int16Array.name" | "Int16Array.of" | "Int32Array" | "Int32Array.BYTES_PER_ELEMENT" | "Int32Array.from" | "Int32Array.name" | "Int32Array.of" | "Int8Array" | "Int8Array.BYTES_PER_ELEMENT" | "Int8Array.from" | "Int8Array.name" | "Int8Array.of" | "Intl" | "Intl.Collator" | "Intl.DateTimeFormat" | "Intl.DisplayNames" | "Intl.ListFormat" | "Intl.Locale" | "Intl.NumberFormat" | "Intl.PluralRules" | "Intl.RelativeTimeFormat" | "Intl.Segmenter" | "Intl.Segments" | "Intl.getCanonicalLocales" | "Intl.supportedValuesOf" | "JSON" | "JSON.parse" | "JSON.stringify" | "Map" | "Map.groupBy" | "Math" | "Math.E" | "Math.LN10" | "Math.LN2" | "Math.LOG10E" | "Math.LOG2E" | "Math.PI" | "Math.SQRT1_2" | "Math.SQRT2" | "Math.abs" | "Math.acos" | "Math.acosh" | "Math.asin" | "Math.asinh" | "Math.atan" | "Math.atan2" | "Math.atanh" | "Math.cbrt" | "Math.ceil" | "Math.clz32" | "Math.cos" | "Math.cosh" | "Math.exp" | "Math.expm1" | "Math.floor" | "Math.fround" | "Math.hypot" | "Math.imul" | "Math.log" | "Math.log10" | "Math.log1p" | "Math.log2" | "Math.max" | "Math.min" | "Math.pow" | "Math.random" | "Math.round" | "Math.sign" | "Math.sin" | "Math.sinh" | "Math.sqrt" | "Math.tan" | "Math.tanh" | "Math.trunc" | "NaN" | "Number.EPSILON" | "Number.MAX_SAFE_INTEGER" | "Number.MAX_VALUE" | "Number.MIN_SAFE_INTEGER" | "Number.MIN_VALUE" | "Number.NEGATIVE_INFINITY" | "Number.NaN" | "Number.POSITIVE_INFINITY" | "Number.isFinite" | "Number.isInteger" | "Number.isNaN" | "Number.isSafeInteger" | "Number.parseFloat" | "Number.parseInt" | "Number.toLocaleString" | "Object.assign" | "Object.create" | "Object.defineGetter" | "Object.defineProperties" | "Object.defineProperty" | "Object.defineSetter" | "Object.entries" | "Object.freeze" | "Object.fromEntries" | "Object.getOwnPropertyDescriptor" | "Object.getOwnPropertyDescriptors" | "Object.getOwnPropertyNames" | "Object.getOwnPropertySymbols" | "Object.getPrototypeOf" | "Object.groupBy" | "Object.hasOwn" | "Object.is" | "Object.isExtensible" | "Object.isFrozen" | "Object.isSealed" | "Object.keys" | "Object.lookupGetter" | "Object.lookupSetter" | "Object.preventExtensions" | "Object.proto" | "Object.seal" | "Object.setPrototypeOf" | "Object.values" | "Promise" | "Promise.all" | "Promise.allSettled" | "Promise.any" | "Promise.race" | "Promise.reject" | "Promise.resolve" | "Proxy" | "Proxy.revocable" | "RangeError" | "ReferenceError" | "Reflect" | "Reflect.apply" | "Reflect.construct" | "Reflect.defineProperty" | "Reflect.deleteProperty" | "Reflect.get" | "Reflect.getOwnPropertyDescriptor" | "Reflect.getPrototypeOf" | "Reflect.has" | "Reflect.isExtensible" | "Reflect.ownKeys" | "Reflect.preventExtensions" | "Reflect.set" | "Reflect.setPrototypeOf" | "RegExp" | "RegExp.dotAll" | "RegExp.hasIndices" | "RegExp.input" | "RegExp.lastIndex" | "RegExp.lastMatch" | "RegExp.lastParen" | "RegExp.leftContext" | "RegExp.n" | "RegExp.rightContext" | "Set" | "SharedArrayBuffer" | "String" | "String.fromCharCode" | "String.fromCodePoint" | "String.length" | "String.localeCompare" | "String.raw" | "String.toLocaleLowerCase" | "String.toLocaleUpperCase" | "Symbol" | "Symbol.asyncIterator" | "Symbol.for" | "Symbol.hasInstance" | "Symbol.isConcatSpreadable" | "Symbol.iterator" | "Symbol.keyFor" | "Symbol.match" | "Symbol.matchAll" | "Symbol.replace" | "Symbol.search" | "Symbol.species" | "Symbol.split" | "Symbol.toPrimitive" | "Symbol.toStringTag" | "Symbol.unscopables" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint16Array.BYTES_PER_ELEMENT" | "Uint16Array.from" | "Uint16Array.name" | "Uint16Array.of" | "Uint32Array" | "Uint32Array.BYTES_PER_ELEMENT" | "Uint32Array.from" | "Uint32Array.name" | "Uint32Array.of" | "Uint8Array" | "Uint8Array.BYTES_PER_ELEMENT" | "Uint8Array.from" | "Uint8Array.name" | "Uint8Array.of" | "Uint8ClampedArray" | "Uint8ClampedArray.BYTES_PER_ELEMENT" | "Uint8ClampedArray.from" | "Uint8ClampedArray.name" | "Uint8ClampedArray.of" | "WeakMap" | "WeakRef" | "WeakSet" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "globalThis" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "unescape")[]
}]
// ----- n/no-unsupported-features/es-syntax -----
type NNoUnsupportedFeaturesEsSyntax = []|[{
  version?: string
  ignores?: ("no-accessor-properties" | "accessor-properties" | "accessorProperties" | "no-arbitrary-module-namespace-names" | "arbitrary-module-namespace-names" | "arbitraryModuleNamespaceNames" | "no-array-from" | "array-from" | "arrayFrom" | "no-array-isarray" | "array-isarray" | "arrayIsarray" | "no-array-of" | "array-of" | "arrayOf" | "no-array-prototype-copywithin" | "array-prototype-copywithin" | "arrayPrototypeCopywithin" | "no-array-prototype-entries" | "array-prototype-entries" | "arrayPrototypeEntries" | "no-array-prototype-every" | "array-prototype-every" | "arrayPrototypeEvery" | "no-array-prototype-fill" | "array-prototype-fill" | "arrayPrototypeFill" | "no-array-prototype-filter" | "array-prototype-filter" | "arrayPrototypeFilter" | "no-array-prototype-find" | "array-prototype-find" | "arrayPrototypeFind" | "no-array-prototype-findindex" | "array-prototype-findindex" | "arrayPrototypeFindindex" | "no-array-prototype-findlast-findlastindex" | "array-prototype-findlast-findlastindex" | "arrayPrototypeFindlastFindlastindex" | "no-array-prototype-flat" | "array-prototype-flat" | "arrayPrototypeFlat" | "no-array-prototype-foreach" | "array-prototype-foreach" | "arrayPrototypeForeach" | "no-array-prototype-includes" | "array-prototype-includes" | "arrayPrototypeIncludes" | "no-array-prototype-indexof" | "array-prototype-indexof" | "arrayPrototypeIndexof" | "no-array-prototype-keys" | "array-prototype-keys" | "arrayPrototypeKeys" | "no-array-prototype-lastindexof" | "array-prototype-lastindexof" | "arrayPrototypeLastindexof" | "no-array-prototype-map" | "array-prototype-map" | "arrayPrototypeMap" | "no-array-prototype-reduce" | "array-prototype-reduce" | "arrayPrototypeReduce" | "no-array-prototype-reduceright" | "array-prototype-reduceright" | "arrayPrototypeReduceright" | "no-array-prototype-some" | "array-prototype-some" | "arrayPrototypeSome" | "no-array-prototype-toreversed" | "array-prototype-toreversed" | "arrayPrototypeToreversed" | "no-array-prototype-tosorted" | "array-prototype-tosorted" | "arrayPrototypeTosorted" | "no-array-prototype-tospliced" | "array-prototype-tospliced" | "arrayPrototypeTospliced" | "no-array-prototype-values" | "array-prototype-values" | "arrayPrototypeValues" | "no-array-prototype-with" | "array-prototype-with" | "arrayPrototypeWith" | "no-array-string-prototype-at" | "array-string-prototype-at" | "arrayStringPrototypeAt" | "no-arrow-functions" | "arrow-functions" | "arrowFunctions" | "no-async-functions" | "async-functions" | "asyncFunctions" | "no-async-iteration" | "async-iteration" | "asyncIteration" | "no-atomics-waitasync" | "atomics-waitasync" | "atomicsWaitasync" | "no-atomics" | "atomics" | "no-bigint" | "bigint" | "no-binary-numeric-literals" | "binary-numeric-literals" | "binaryNumericLiterals" | "no-block-scoped-functions" | "block-scoped-functions" | "blockScopedFunctions" | "no-block-scoped-variables" | "block-scoped-variables" | "blockScopedVariables" | "no-class-fields" | "class-fields" | "classFields" | "no-class-static-block" | "class-static-block" | "classStaticBlock" | "no-classes" | "classes" | "no-computed-properties" | "computed-properties" | "computedProperties" | "no-date-now" | "date-now" | "dateNow" | "no-date-prototype-getyear-setyear" | "date-prototype-getyear-setyear" | "datePrototypeGetyearSetyear" | "no-date-prototype-togmtstring" | "date-prototype-togmtstring" | "datePrototypeTogmtstring" | "no-default-parameters" | "default-parameters" | "defaultParameters" | "no-destructuring" | "destructuring" | "no-dynamic-import" | "dynamic-import" | "dynamicImport" | "no-error-cause" | "error-cause" | "errorCause" | "no-escape-unescape" | "escape-unescape" | "escapeUnescape" | "no-exponential-operators" | "exponential-operators" | "exponentialOperators" | "no-export-ns-from" | "export-ns-from" | "exportNsFrom" | "no-for-of-loops" | "for-of-loops" | "forOfLoops" | "no-function-declarations-in-if-statement-clauses-without-block" | "function-declarations-in-if-statement-clauses-without-block" | "functionDeclarationsInIfStatementClausesWithoutBlock" | "no-function-prototype-bind" | "function-prototype-bind" | "functionPrototypeBind" | "no-generators" | "generators" | "no-global-this" | "global-this" | "globalThis" | "no-hashbang" | "hashbang" | "no-import-meta" | "import-meta" | "importMeta" | "no-initializers-in-for-in" | "initializers-in-for-in" | "initializersInForIn" | "no-intl-datetimeformat-prototype-formatrange" | "intl-datetimeformat-prototype-formatrange" | "intlDatetimeformatPrototypeFormatrange" | "no-intl-datetimeformat-prototype-formattoparts" | "intl-datetimeformat-prototype-formattoparts" | "intlDatetimeformatPrototypeFormattoparts" | "no-intl-displaynames" | "intl-displaynames" | "intlDisplaynames" | "no-intl-getcanonicallocales" | "intl-getcanonicallocales" | "intlGetcanonicallocales" | "no-intl-listformat" | "intl-listformat" | "intlListformat" | "no-intl-locale" | "intl-locale" | "intlLocale" | "no-intl-numberformat-prototype-formatrange" | "intl-numberformat-prototype-formatrange" | "intlNumberformatPrototypeFormatrange" | "no-intl-numberformat-prototype-formatrangetoparts" | "intl-numberformat-prototype-formatrangetoparts" | "intlNumberformatPrototypeFormatrangetoparts" | "no-intl-numberformat-prototype-formattoparts" | "intl-numberformat-prototype-formattoparts" | "intlNumberformatPrototypeFormattoparts" | "no-intl-pluralrules-prototype-selectrange" | "intl-pluralrules-prototype-selectrange" | "intlPluralrulesPrototypeSelectrange" | "no-intl-pluralrules" | "intl-pluralrules" | "intlPluralrules" | "no-intl-relativetimeformat" | "intl-relativetimeformat" | "intlRelativetimeformat" | "no-intl-segmenter" | "intl-segmenter" | "intlSegmenter" | "no-intl-supportedvaluesof" | "intl-supportedvaluesof" | "intlSupportedvaluesof" | "no-json-superset" | "json-superset" | "jsonSuperset" | "no-json" | "json" | "no-keyword-properties" | "keyword-properties" | "keywordProperties" | "no-labelled-function-declarations" | "labelled-function-declarations" | "labelledFunctionDeclarations" | "no-legacy-object-prototype-accessor-methods" | "legacy-object-prototype-accessor-methods" | "legacyObjectPrototypeAccessorMethods" | "no-logical-assignment-operators" | "logical-assignment-operators" | "logicalAssignmentOperators" | "no-malformed-template-literals" | "malformed-template-literals" | "malformedTemplateLiterals" | "no-map" | "map" | "no-math-acosh" | "math-acosh" | "mathAcosh" | "no-math-asinh" | "math-asinh" | "mathAsinh" | "no-math-atanh" | "math-atanh" | "mathAtanh" | "no-math-cbrt" | "math-cbrt" | "mathCbrt" | "no-math-clz32" | "math-clz32" | "mathClz32" | "no-math-cosh" | "math-cosh" | "mathCosh" | "no-math-expm1" | "math-expm1" | "mathExpm1" | "no-math-fround" | "math-fround" | "mathFround" | "no-math-hypot" | "math-hypot" | "mathHypot" | "no-math-imul" | "math-imul" | "mathImul" | "no-math-log10" | "math-log10" | "mathLog10" | "no-math-log1p" | "math-log1p" | "mathLog1p" | "no-math-log2" | "math-log2" | "mathLog2" | "no-math-sign" | "math-sign" | "mathSign" | "no-math-sinh" | "math-sinh" | "mathSinh" | "no-math-tanh" | "math-tanh" | "mathTanh" | "no-math-trunc" | "math-trunc" | "mathTrunc" | "no-modules" | "modules" | "no-new-target" | "new-target" | "newTarget" | "new.target" | "no-nullish-coalescing-operators" | "nullish-coalescing-operators" | "nullishCoalescingOperators" | "no-number-epsilon" | "number-epsilon" | "numberEpsilon" | "no-number-isfinite" | "number-isfinite" | "numberIsfinite" | "no-number-isinteger" | "number-isinteger" | "numberIsinteger" | "no-number-isnan" | "number-isnan" | "numberIsnan" | "no-number-issafeinteger" | "number-issafeinteger" | "numberIssafeinteger" | "no-number-maxsafeinteger" | "number-maxsafeinteger" | "numberMaxsafeinteger" | "no-number-minsafeinteger" | "number-minsafeinteger" | "numberMinsafeinteger" | "no-number-parsefloat" | "number-parsefloat" | "numberParsefloat" | "no-number-parseint" | "number-parseint" | "numberParseint" | "no-numeric-separators" | "numeric-separators" | "numericSeparators" | "no-object-assign" | "object-assign" | "objectAssign" | "no-object-create" | "object-create" | "objectCreate" | "no-object-defineproperties" | "object-defineproperties" | "objectDefineproperties" | "no-object-defineproperty" | "object-defineproperty" | "objectDefineproperty" | "no-object-entries" | "object-entries" | "objectEntries" | "no-object-freeze" | "object-freeze" | "objectFreeze" | "no-object-fromentries" | "object-fromentries" | "objectFromentries" | "no-object-getownpropertydescriptor" | "object-getownpropertydescriptor" | "objectGetownpropertydescriptor" | "no-object-getownpropertydescriptors" | "object-getownpropertydescriptors" | "objectGetownpropertydescriptors" | "no-object-getownpropertynames" | "object-getownpropertynames" | "objectGetownpropertynames" | "no-object-getownpropertysymbols" | "object-getownpropertysymbols" | "objectGetownpropertysymbols" | "no-object-getprototypeof" | "object-getprototypeof" | "objectGetprototypeof" | "no-object-hasown" | "object-hasown" | "objectHasown" | "no-object-is" | "object-is" | "objectIs" | "no-object-isextensible" | "object-isextensible" | "objectIsextensible" | "no-object-isfrozen" | "object-isfrozen" | "objectIsfrozen" | "no-object-issealed" | "object-issealed" | "objectIssealed" | "no-object-keys" | "object-keys" | "objectKeys" | "no-object-map-groupby" | "object-map-groupby" | "objectMapGroupby" | "no-object-preventextensions" | "object-preventextensions" | "objectPreventextensions" | "no-object-seal" | "object-seal" | "objectSeal" | "no-object-setprototypeof" | "object-setprototypeof" | "objectSetprototypeof" | "no-object-super-properties" | "object-super-properties" | "objectSuperProperties" | "no-object-values" | "object-values" | "objectValues" | "no-octal-numeric-literals" | "octal-numeric-literals" | "octalNumericLiterals" | "no-optional-catch-binding" | "optional-catch-binding" | "optionalCatchBinding" | "no-optional-chaining" | "optional-chaining" | "optionalChaining" | "no-private-in" | "private-in" | "privateIn" | "no-promise-all-settled" | "promise-all-settled" | "promiseAllSettled" | "no-promise-any" | "promise-any" | "promiseAny" | "no-promise-prototype-finally" | "promise-prototype-finally" | "promisePrototypeFinally" | "no-promise-withresolvers" | "promise-withresolvers" | "promiseWithresolvers" | "no-promise" | "promise" | "no-property-shorthands" | "property-shorthands" | "propertyShorthands" | "no-proxy" | "proxy" | "no-reflect" | "reflect" | "no-regexp-d-flag" | "regexp-d-flag" | "regexpDFlag" | "no-regexp-lookbehind-assertions" | "regexp-lookbehind-assertions" | "regexpLookbehindAssertions" | "regexpLookbehind" | "no-regexp-named-capture-groups" | "regexp-named-capture-groups" | "regexpNamedCaptureGroups" | "no-regexp-prototype-compile" | "regexp-prototype-compile" | "regexpPrototypeCompile" | "no-regexp-prototype-flags" | "regexp-prototype-flags" | "regexpPrototypeFlags" | "no-regexp-s-flag" | "regexp-s-flag" | "regexpSFlag" | "regexpS" | "no-regexp-u-flag" | "regexp-u-flag" | "regexpUFlag" | "regexpU" | "no-regexp-unicode-property-escapes-2019" | "regexp-unicode-property-escapes-2019" | "regexpUnicodePropertyEscapes2019" | "no-regexp-unicode-property-escapes-2020" | "regexp-unicode-property-escapes-2020" | "regexpUnicodePropertyEscapes2020" | "no-regexp-unicode-property-escapes-2021" | "regexp-unicode-property-escapes-2021" | "regexpUnicodePropertyEscapes2021" | "no-regexp-unicode-property-escapes-2022" | "regexp-unicode-property-escapes-2022" | "regexpUnicodePropertyEscapes2022" | "no-regexp-unicode-property-escapes-2023" | "regexp-unicode-property-escapes-2023" | "regexpUnicodePropertyEscapes2023" | "no-regexp-unicode-property-escapes" | "regexp-unicode-property-escapes" | "regexpUnicodePropertyEscapes" | "regexpUnicodeProperties" | "no-regexp-v-flag" | "regexp-v-flag" | "regexpVFlag" | "no-regexp-y-flag" | "regexp-y-flag" | "regexpYFlag" | "regexpY" | "no-resizable-and-growable-arraybuffers" | "resizable-and-growable-arraybuffers" | "resizableAndGrowableArraybuffers" | "no-rest-parameters" | "rest-parameters" | "restParameters" | "no-rest-spread-properties" | "rest-spread-properties" | "restSpreadProperties" | "no-set" | "set" | "no-shadow-catch-param" | "shadow-catch-param" | "shadowCatchParam" | "no-shared-array-buffer" | "shared-array-buffer" | "sharedArrayBuffer" | "no-spread-elements" | "spread-elements" | "spreadElements" | "no-string-create-html-methods" | "string-create-html-methods" | "stringCreateHtmlMethods" | "no-string-fromcodepoint" | "string-fromcodepoint" | "stringFromcodepoint" | "no-string-prototype-codepointat" | "string-prototype-codepointat" | "stringPrototypeCodepointat" | "no-string-prototype-endswith" | "string-prototype-endswith" | "stringPrototypeEndswith" | "no-string-prototype-includes" | "string-prototype-includes" | "stringPrototypeIncludes" | "no-string-prototype-iswellformed-towellformed" | "string-prototype-iswellformed-towellformed" | "stringPrototypeIswellformedTowellformed" | "no-string-prototype-matchall" | "string-prototype-matchall" | "stringPrototypeMatchall" | "no-string-prototype-normalize" | "string-prototype-normalize" | "stringPrototypeNormalize" | "no-string-prototype-padstart-padend" | "string-prototype-padstart-padend" | "stringPrototypePadstartPadend" | "no-string-prototype-repeat" | "string-prototype-repeat" | "stringPrototypeRepeat" | "no-string-prototype-replaceall" | "string-prototype-replaceall" | "stringPrototypeReplaceall" | "no-string-prototype-startswith" | "string-prototype-startswith" | "stringPrototypeStartswith" | "no-string-prototype-substr" | "string-prototype-substr" | "stringPrototypeSubstr" | "no-string-prototype-trim" | "string-prototype-trim" | "stringPrototypeTrim" | "no-string-prototype-trimleft-trimright" | "string-prototype-trimleft-trimright" | "stringPrototypeTrimleftTrimright" | "no-string-prototype-trimstart-trimend" | "string-prototype-trimstart-trimend" | "stringPrototypeTrimstartTrimend" | "no-string-raw" | "string-raw" | "stringRaw" | "no-subclassing-builtins" | "subclassing-builtins" | "subclassingBuiltins" | "no-symbol-prototype-description" | "symbol-prototype-description" | "symbolPrototypeDescription" | "no-symbol" | "symbol" | "no-template-literals" | "template-literals" | "templateLiterals" | "no-top-level-await" | "top-level-await" | "topLevelAwait" | "no-trailing-commas" | "trailing-commas" | "trailingCommas" | "no-trailing-function-commas" | "trailing-function-commas" | "trailingFunctionCommas" | "trailingCommasInFunctions" | "no-typed-arrays" | "typed-arrays" | "typedArrays" | "no-unicode-codepoint-escapes" | "unicode-codepoint-escapes" | "unicodeCodepointEscapes" | "unicodeCodePointEscapes" | "no-weak-map" | "weak-map" | "weakMap" | "no-weak-set" | "weak-set" | "weakSet" | "no-weakrefs" | "weakrefs")[]
}]
// ----- n/no-unsupported-features/node-builtins -----
type NNoUnsupportedFeaturesNodeBuiltins = []|[{
  version?: string
  allowExperimental?: boolean
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.globalAgent" | "http.createServer" | "http.get" | "http.request" | "http.Agent" | "http.Server" | "inspector" | "inspector.Session" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.isBuiltin" | "module.register" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.isBuiltin" | "module.Module.register" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.SocketAddress" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "test" | "test.after" | "test.afterEach" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.rootCertificates" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.DEFAULT_CIPHERS" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.getCiphers" | "tls.SecureContext" | "tls.CryptoStream" | "tls.SecurePair" | "tls.Server" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.isMainThread" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.constants" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.deflate" | "zlib.deflateSync" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateSync" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib" | "import.meta.resolve" | "import.meta.dirname" | "import.meta.filename")[]
}]
// ----- n/prefer-global/buffer -----
type NPreferGlobalBuffer = []|[("always" | "never")]
// ----- n/prefer-global/console -----
type NPreferGlobalConsole = []|[("always" | "never")]
// ----- n/prefer-global/process -----
type NPreferGlobalProcess = []|[("always" | "never")]
// ----- n/prefer-global/text-decoder -----
type NPreferGlobalTextDecoder = []|[("always" | "never")]
// ----- n/prefer-global/text-encoder -----
type NPreferGlobalTextEncoder = []|[("always" | "never")]
// ----- n/prefer-global/url -----
type NPreferGlobalUrl = []|[("always" | "never")]
// ----- n/prefer-global/url-search-params -----
type NPreferGlobalUrlSearchParams = []|[("always" | "never")]
// ----- n/prefer-node-protocol -----
type NPreferNodeProtocol = []|[{
  version?: string
}]
// ----- n/shebang -----
type NShebang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- new-cap -----
type NewCap = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]
// ----- new-parens -----
type NewParens = []|[("always" | "never")]
// ----- newline-after-var -----
type NewlineAfterVar = []|[("never" | "always")]
// ----- newline-per-chained-call -----
type NewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- no-bitwise -----
type NoBitwise = []|[{
  allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[]
  int32Hint?: boolean
}]
// ----- no-cond-assign -----
type NoCondAssign = []|[("except-parens" | "always")]
// ----- no-confusing-arrow -----
type NoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- no-console -----
type NoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- no-constant-condition -----
type NoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- no-duplicate-imports -----
type NoDuplicateImports = []|[{
  includeExports?: boolean
}]
// ----- no-else-return -----
type NoElseReturn = []|[{
  allowElseIf?: boolean
}]
// ----- no-empty -----
type NoEmpty = []|[{
  allowEmptyCatch?: boolean
}]
// ----- no-empty-function -----
type NoEmptyFunction = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods")[]
}]
// ----- no-empty-pattern -----
type NoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- no-eval -----
type NoEval = []|[{
  allowIndirect?: boolean
}]
// ----- no-extend-native -----
type NoExtendNative = []|[{
  exceptions?: string[]
}]
// ----- no-extra-boolean-cast -----
type NoExtraBooleanCast = []|[({
  enforceForInnerExpressions?: boolean
} | {
  enforceForLogicalOperands?: boolean
})]
// ----- no-extra-parens -----
type NoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- no-fallthrough -----
type NoFallthrough = []|[{
  commentPattern?: string
  allowEmptyCase?: boolean
  reportUnusedFallthroughComment?: boolean
}]
// ----- no-global-assign -----
type NoGlobalAssign = []|[{
  exceptions?: string[]
}]
// ----- no-implicit-coercion -----
type NoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- no-implicit-globals -----
type NoImplicitGlobals = []|[{
  lexicalBindings?: boolean
}]
// ----- no-inline-comments -----
type NoInlineComments = []|[{
  ignorePattern?: string
}]
// ----- no-inner-declarations -----
type NoInnerDeclarations = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]
// ----- no-invalid-regexp -----
type NoInvalidRegexp = []|[{
  allowConstructorFlags?: string[]
}]
// ----- no-invalid-this -----
type NoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- no-irregular-whitespace -----
type NoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- no-labels -----
type NoLabels = []|[{
  allowLoop?: boolean
  allowSwitch?: boolean
}]
// ----- no-magic-numbers -----
type NoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
}]
// ----- no-misleading-character-class -----
type NoMisleadingCharacterClass = []|[{
  allowEscape?: boolean
}]
// ----- no-mixed-operators -----
type NoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- no-mixed-requires -----
type NoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- no-mixed-spaces-and-tabs -----
type NoMixedSpacesAndTabs = []|[("smart-tabs" | true | false)]
// ----- no-multi-assign -----
type NoMultiAssign = []|[{
  ignoreNonDeclaration?: boolean
}]
// ----- no-multi-spaces -----
type NoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
}]
// ----- no-multiple-empty-lines -----
type NoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- no-native-reassign -----
type NoNativeReassign = []|[{
  exceptions?: string[]
}]
// ----- no-param-reassign -----
type NoParamReassign = []|[({
  props?: false
} | {
  props?: true
  ignorePropertyModificationsFor?: string[]
  ignorePropertyModificationsForRegex?: string[]
})]
// ----- no-plusplus -----
type NoPlusplus = []|[{
  allowForLoopAfterthoughts?: boolean
}]
// ----- no-promise-executor-return -----
type NoPromiseExecutorReturn = []|[{
  allowVoid?: boolean
}]
// ----- no-redeclare -----
type NoRedeclare = []|[{
  builtinGlobals?: boolean
}]
// ----- no-restricted-exports -----
type NoRestrictedExports = []|[({
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
} | {
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
  restrictDefaultExports?: {
    direct?: boolean
    named?: boolean
    defaultFrom?: boolean
    namedFrom?: boolean
    namespaceFrom?: boolean
  }
})]
// ----- no-restricted-globals -----
type NoRestrictedGlobals = (string | {
  name: string
  message?: string
})[]
// ----- no-restricted-imports -----
type NoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
  })[]
  patterns?: (string[] | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  })[])
}])
// ----- no-restricted-modules -----
type NoRestrictedModules = ((string | {
  name: string
  message?: string
})[] | {
  paths?: (string | {
    name: string
    message?: string
  })[]
  patterns?: string[]
}[])
// ----- no-restricted-properties -----
type NoRestrictedProperties = ({
  object: string
  property?: string
  message?: string
} | {
  object?: string
  property: string
  message?: string
})[]
// ----- no-restricted-syntax -----
type NoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- no-return-assign -----
type NoReturnAssign = []|[("except-parens" | "always")]
// ----- no-self-assign -----
type NoSelfAssign = []|[{
  props?: boolean
}]
// ----- no-sequences -----
type NoSequences = []|[{
  allowInParentheses?: boolean
}]
// ----- no-shadow -----
type NoShadow = []|[{
  builtinGlobals?: boolean
  hoist?: ("all" | "functions" | "never")
  allow?: string[]
  ignoreOnInitialization?: boolean
}]
// ----- no-sync -----
type NoSync = []|[{
  allowAtRootLevel?: boolean
}]
// ----- no-tabs -----
type NoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- no-trailing-spaces -----
type NoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- no-undef -----
type NoUndef = []|[{
  typeof?: boolean
}]
// ----- no-underscore-dangle -----
type NoUnderscoreDangle = []|[{
  allow?: string[]
  allowAfterThis?: boolean
  allowAfterSuper?: boolean
  allowAfterThisConstructor?: boolean
  enforceInMethodNames?: boolean
  allowFunctionParams?: boolean
  enforceInClassFields?: boolean
  allowInArrayDestructuring?: boolean
  allowInObjectDestructuring?: boolean
}]
// ----- no-unneeded-ternary -----
type NoUnneededTernary = []|[{
  defaultAssignment?: boolean
}]
// ----- no-unreachable-loop -----
type NoUnreachableLoop = []|[{
  ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
}]
// ----- no-unsafe-negation -----
type NoUnsafeNegation = []|[{
  enforceForOrderingRelations?: boolean
}]
// ----- no-unsafe-optional-chaining -----
type NoUnsafeOptionalChaining = []|[{
  disallowArithmeticOperators?: boolean
}]
// ----- no-unused-expressions -----
type NoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- no-unused-vars -----
type NoUnusedVars = []|[(("all" | "local") | {
  vars?: ("all" | "local")
  varsIgnorePattern?: string
  args?: ("all" | "after-used" | "none")
  ignoreRestSiblings?: boolean
  argsIgnorePattern?: string
  caughtErrors?: ("all" | "none")
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreClassWithStaticInitBlock?: boolean
  reportUsedIgnorePattern?: boolean
})]
// ----- no-use-before-define -----
type NoUseBeforeDefine = []|[("nofunc" | {
  functions?: boolean
  classes?: boolean
  variables?: boolean
  allowNamedExports?: boolean
})]
// ----- no-useless-computed-key -----
type NoUselessComputedKey = []|[{
  enforceForClassMembers?: boolean
}]
// ----- no-useless-rename -----
type NoUselessRename = []|[{
  ignoreDestructuring?: boolean
  ignoreImport?: boolean
  ignoreExport?: boolean
}]
// ----- no-void -----
type NoVoid = []|[{
  allowAsStatement?: boolean
}]
// ----- no-warning-comments -----
type NoWarningComments = []|[{
  terms?: string[]
  location?: ("start" | "anywhere")
  
  decoration?: [string, ...(string)[]]
}]
// ----- nonblock-statement-body-position -----
type NonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- object-curly-newline -----
type ObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- object-curly-spacing -----
type ObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- object-property-newline -----
type ObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- object-shorthand -----
type ObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- one-var -----
type OneVar = []|[(("always" | "never" | "consecutive") | {
  separateRequires?: boolean
  var?: ("always" | "never" | "consecutive")
  let?: ("always" | "never" | "consecutive")
  const?: ("always" | "never" | "consecutive")
} | {
  initialized?: ("always" | "never" | "consecutive")
  uninitialized?: ("always" | "never" | "consecutive")
})]
// ----- one-var-declaration-per-line -----
type OneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- operator-assignment -----
type OperatorAssignment = []|[("always" | "never")]
// ----- operator-linebreak -----
type OperatorLinebreak = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- padded-blocks -----
type PaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- padding-line-between-statements -----
type _PaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _PaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with") | [("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"), ...(("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"))[]])
type PaddingLineBetweenStatements = {
  blankLine: _PaddingLineBetweenStatementsPaddingType
  prev: _PaddingLineBetweenStatementsStatementType
  next: _PaddingLineBetweenStatementsStatementType
}[]
// ----- prefer-arrow-callback -----
type PreferArrowCallback = []|[{
  allowNamedFunctions?: boolean
  allowUnboundThis?: boolean
}]
// ----- prefer-const -----
type PreferConst = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
}]
// ----- prefer-destructuring -----
type PreferDestructuring = []|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  enforceForRenamedProperties?: boolean
}]
// ----- prefer-promise-reject-errors -----
type PreferPromiseRejectErrors = []|[{
  allowEmptyReject?: boolean
}]
// ----- prefer-reflect -----
type PreferReflect = []|[{
  exceptions?: ("apply" | "call" | "delete" | "defineProperty" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "setPrototypeOf" | "isExtensible" | "getOwnPropertyNames" | "preventExtensions")[]
}]
// ----- prefer-regex-literals -----
type PreferRegexLiterals = []|[{
  disallowRedundantWrapping?: boolean
}]
// ----- quote-props -----
type QuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- quotes -----
type Quotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- radix -----
type Radix = []|[("always" | "as-needed")]
// ----- react-compiler/react-compiler -----
type ReactCompilerReactCompiler = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/exhaustive-deps -----
type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
}]
// ----- react/boolean-prop-naming -----
type ReactBooleanPropNaming = []|[{
  
  propTypeNames?: [string, ...(string)[]]
  rule?: string
  message?: string
  validateNested?: boolean
}]
// ----- react/button-has-type -----
type ReactButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]
// ----- react/checked-requires-onchange-or-readonly -----
type ReactCheckedRequiresOnchangeOrReadonly = []|[{
  ignoreMissingProperties?: boolean
  ignoreExclusiveCheckedAttribute?: boolean
}]
// ----- react/default-props-match-prop-types -----
type ReactDefaultPropsMatchPropTypes = []|[{
  allowRequiredDefaults?: boolean
}]
// ----- react/destructuring-assignment -----
type ReactDestructuringAssignment = []|[("always" | "never")]|[("always" | "never"), {
  ignoreClassFields?: boolean
  destructureInSignature?: ("always" | "ignore")
}]
// ----- react/display-name -----
type ReactDisplayName = []|[{
  ignoreTranspilerName?: boolean
  checkContextObjects?: boolean
}]
// ----- react/forbid-component-props -----
type ReactForbidComponentProps = []|[{
  forbid?: (string | {
    propName?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }) | {
    propNamePattern?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }))[]
  [k: string]: unknown | undefined
}]
// ----- react/forbid-dom-props -----
type ReactForbidDomProps = []|[{
  forbid?: (string | {
    propName?: string
    disallowedFor?: string[]
    message?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/forbid-elements -----
type ReactForbidElements = []|[{
  forbid?: (string | {
    element: string
    message?: string
  })[]
}]
// ----- react/forbid-foreign-prop-types -----
type ReactForbidForeignPropTypes = []|[{
  allowInPropTypes?: boolean
}]
// ----- react/forbid-prop-types -----
type ReactForbidPropTypes = []|[{
  forbid?: string[]
  checkContextTypes?: boolean
  checkChildContextTypes?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/function-component-definition -----
type ReactFunctionComponentDefinition = []|[{
  namedComponents?: (("function-declaration" | "arrow-function" | "function-expression") | ("function-declaration" | "arrow-function" | "function-expression")[])
  unnamedComponents?: (("arrow-function" | "function-expression") | ("arrow-function" | "function-expression")[])
  [k: string]: unknown | undefined
}]
// ----- react/hook-use-state -----
type ReactHookUseState = []|[{
  allowDestructuredState?: boolean
}]
// ----- react/jsx-boolean-value -----
type ReactJsxBooleanValue = ([]|[("always" | "never")] | []|["always"]|["always", {
  never?: string[]
  assumeUndefinedIsFalse?: boolean
}] | []|["never"]|["never", {
  always?: string[]
  assumeUndefinedIsFalse?: boolean
}])
// ----- react/jsx-closing-bracket-location -----
type ReactJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
  selfClosing?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
})]
// ----- react/jsx-closing-tag-location -----
type ReactJsxClosingTagLocation = []|[(("tag-aligned" | "line-aligned") | {
  location?: ("tag-aligned" | "line-aligned")
})]
// ----- react/jsx-curly-brace-presence -----
type ReactJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- react/jsx-curly-newline -----
type ReactJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- react/jsx-curly-spacing -----
type ReactJsxCurlySpacing = []|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
type _ReactJsxCurlySpacingBasicConfigOrBoolean = (_ReactJsxCurlySpacing_BasicConfig | boolean)
interface _ReactJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- react/jsx-equals-spacing -----
type ReactJsxEqualsSpacing = []|[("always" | "never")]
// ----- react/jsx-filename-extension -----
type ReactJsxFilenameExtension = []|[{
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
}]
// ----- react/jsx-first-prop-new-line -----
type ReactJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- react/jsx-fragments -----
type ReactJsxFragments = []|[("syntax" | "element")]
// ----- react/jsx-handler-names -----
type ReactJsxHandlerNames = []|[({
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: false
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: false
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  checkLocalVariables?: boolean
} | {
  checkInlineFunction?: boolean
} | {
  ignoreComponentNames?: string[]
  [k: string]: unknown | undefined
})]
// ----- react/jsx-indent -----
type ReactJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- react/jsx-indent-props -----
type ReactJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- react/jsx-key -----
type ReactJsxKey = []|[{
  checkFragmentShorthand?: boolean
  checkKeyMustBeforeSpread?: boolean
  warnOnDuplicates?: boolean
}]
// ----- react/jsx-max-depth -----
type ReactJsxMaxDepth = []|[{
  max?: number
}]
// ----- react/jsx-max-props-per-line -----
type ReactJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- react/jsx-newline -----
type ReactJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- react/jsx-no-bind -----
type ReactJsxNoBind = []|[{
  allowArrowFunctions?: boolean
  allowBind?: boolean
  allowFunctions?: boolean
  ignoreRefs?: boolean
  ignoreDOMComponents?: boolean
}]
// ----- react/jsx-no-duplicate-props -----
type ReactJsxNoDuplicateProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-no-leaked-render -----
type ReactJsxNoLeakedRender = []|[{
  validStrategies?: ("ternary" | "coerce")[]
}]
// ----- react/jsx-no-literals -----
type ReactJsxNoLiterals = []|[{
  elementOverrides?: {
    [k: string]: {
      applyToNestedElements?: boolean
      noStrings?: boolean
      allowedStrings?: string[]
      ignoreProps?: boolean
      noAttributeStrings?: boolean
      [k: string]: unknown | undefined
    }
  }
  noStrings?: boolean
  allowedStrings?: string[]
  ignoreProps?: boolean
  noAttributeStrings?: boolean
}]
// ----- react/jsx-no-script-url -----
type ReactJsxNoScriptUrl = ([]|[{
  name: string
  props: string[]
}[]]|[{
  name: string
  props: string[]
}[], {
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}])
// ----- react/jsx-no-target-blank -----
type ReactJsxNoTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
  warnOnSpreadAttributes?: boolean
  links?: boolean
  forms?: boolean
}]
// ----- react/jsx-no-undef -----
type ReactJsxNoUndef = []|[{
  allowGlobals?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  allowExpressions?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/jsx-one-expression-per-line -----
type ReactJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "non-jsx")
}]
// ----- react/jsx-pascal-case -----
type ReactJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  
  ignore?: []|[string]
}]
// ----- react/jsx-props-no-spreading -----
type ReactJsxPropsNoSpreading = []|[({
  html?: ("enforce" | "ignore")
  custom?: ("enforce" | "ignore")
  explicitSpread?: ("enforce" | "ignore")
  exceptions?: string[]
  [k: string]: unknown | undefined
} & {
  [k: string]: unknown | undefined
})]
// ----- react/jsx-sort-default-props -----
type ReactJsxSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-sort-props -----
type ReactJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- react/jsx-space-before-closing -----
type ReactJsxSpaceBeforeClosing = []|[("always" | "never")]
// ----- react/jsx-tag-spacing -----
type ReactJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- react/jsx-wrap-multilines -----
type ReactJsxWrapMultilines = []|[{
  declaration?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  assignment?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  return?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  arrow?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  condition?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  logical?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  prop?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
}]
// ----- react/no-children-prop -----
type ReactNoChildrenProp = []|[{
  allowFunctions?: boolean
}]
// ----- react/no-danger -----
type ReactNoDanger = []|[{
  
  customComponentNames?: string[]
  [k: string]: unknown | undefined
}]
// ----- react/no-did-mount-set-state -----
type ReactNoDidMountSetState = []|["disallow-in-func"]
// ----- react/no-did-update-set-state -----
type ReactNoDidUpdateSetState = []|["disallow-in-func"]
// ----- react/no-invalid-html-attribute -----
type ReactNoInvalidHtmlAttribute = []|[("rel")[]]
// ----- react/no-multi-comp -----
type ReactNoMultiComp = []|[{
  ignoreStateless?: boolean
}]
// ----- react/no-string-refs -----
type ReactNoStringRefs = []|[{
  noTemplateLiterals?: boolean
}]
// ----- react/no-unescaped-entities -----
type ReactNoUnescapedEntities = []|[{
  forbid?: (string | {
    char?: string
    alternatives?: string[]
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/no-unknown-property -----
type ReactNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react/no-unsafe -----
type ReactNoUnsafe = []|[{
  checkAliases?: boolean
}]
// ----- react/no-unstable-nested-components -----
type ReactNoUnstableNestedComponents = []|[{
  customValidators?: string[]
  allowAsProps?: boolean
  propNamePattern?: string
}]
// ----- react/no-unused-prop-types -----
type ReactNoUnusedPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipShapeProps?: boolean
}]
// ----- react/no-will-update-set-state -----
type ReactNoWillUpdateSetState = []|["disallow-in-func"]
// ----- react/prefer-es6-class -----
type ReactPreferEs6Class = []|[("always" | "never")]
// ----- react/prefer-stateless-function -----
type ReactPreferStatelessFunction = []|[{
  ignorePureComponents?: boolean
}]
// ----- react/prop-types -----
type ReactPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipUndeclared?: boolean
}]
// ----- react/require-default-props -----
type ReactRequireDefaultProps = []|[{
  forbidDefaultForRequired?: boolean
  classes?: ("defaultProps" | "ignore")
  functions?: ("defaultArguments" | "defaultProps" | "ignore")
  ignoreFunctionalComponents?: boolean
}]
// ----- react/require-optimization -----
type ReactRequireOptimization = []|[{
  allowDecorators?: string[]
}]
// ----- react/self-closing-comp -----
type ReactSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- react/sort-comp -----
type ReactSortComp = []|[{
  order?: string[]
  groups?: {
    [k: string]: string[]
  }
}]
// ----- react/sort-default-props -----
type ReactSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/sort-prop-types -----
type ReactSortPropTypes = []|[{
  requiredFirst?: boolean
  callbacksLast?: boolean
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  sortShapeProp?: boolean
  checkTypes?: boolean
}]
// ----- react/state-in-constructor -----
type ReactStateInConstructor = []|[("always" | "never")]
// ----- react/static-property-placement -----
type ReactStaticPropertyPlacement = []|[("static public field" | "static getter" | "property assignment")]|[("static public field" | "static getter" | "property assignment"), {
  propTypes?: ("static public field" | "static getter" | "property assignment")
  defaultProps?: ("static public field" | "static getter" | "property assignment")
  childContextTypes?: ("static public field" | "static getter" | "property assignment")
  contextTypes?: ("static public field" | "static getter" | "property assignment")
  contextType?: ("static public field" | "static getter" | "property assignment")
  displayName?: ("static public field" | "static getter" | "property assignment")
}]
// ----- react/style-prop-object -----
type ReactStylePropObject = []|[{
  allow?: string[]
  [k: string]: unknown | undefined
}]
// ----- regexp/hexadecimal-escape -----
type RegexpHexadecimalEscape = []|[("always" | "never")]
// ----- regexp/letter-case -----
type RegexpLetterCase = []|[{
  caseInsensitive?: ("lowercase" | "uppercase" | "ignore")
  unicodeEscape?: ("lowercase" | "uppercase" | "ignore")
  hexadecimalEscape?: ("lowercase" | "uppercase" | "ignore")
  controlEscape?: ("lowercase" | "uppercase" | "ignore")
}]
// ----- regexp/match-any -----
type RegexpMatchAny = []|[{
  
  allows?: [("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"), ...(("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"))[]]
}]
// ----- regexp/no-dupe-disjunctions -----
type RegexpNoDupeDisjunctions = []|[{
  report?: ("all" | "trivial" | "interesting")
  reportExponentialBacktracking?: ("none" | "certain" | "potential")
  reportUnreachable?: ("certain" | "potential")
}]
// ----- regexp/no-lazy-ends -----
type RegexpNoLazyEnds = []|[{
  ignorePartial?: boolean
}]
// ----- regexp/no-legacy-features -----
type RegexpNoLegacyFeatures = []|[{
  staticProperties?: ("input" | "$_" | "lastMatch" | "$&" | "lastParen" | "$+" | "leftContext" | "$`" | "rightContext" | "$'" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9")[]
  prototypeMethods?: ("compile")[]
}]
// ----- regexp/no-misleading-capturing-group -----
type RegexpNoMisleadingCapturingGroup = []|[{
  reportBacktrackingEnds?: boolean
}]
// ----- regexp/no-misleading-unicode-character -----
type RegexpNoMisleadingUnicodeCharacter = []|[{
  fixable?: boolean
}]
// ----- regexp/no-missing-g-flag -----
type RegexpNoMissingGFlag = []|[{
  strictTypes?: boolean
}]
// ----- regexp/no-obscure-range -----
type RegexpNoObscureRange = []|[{
  allowed?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/no-super-linear-backtracking -----
type RegexpNoSuperLinearBacktracking = []|[{
  report?: ("certain" | "potential")
}]
// ----- regexp/no-super-linear-move -----
type RegexpNoSuperLinearMove = []|[{
  report?: ("certain" | "potential")
  ignoreSticky?: boolean
  ignorePartial?: boolean
}]
// ----- regexp/no-unused-capturing-group -----
type RegexpNoUnusedCapturingGroup = []|[{
  fixable?: boolean
  allowNamed?: boolean
}]
// ----- regexp/no-useless-character-class -----
type RegexpNoUselessCharacterClass = []|[{
  ignores?: string[]
}]
// ----- regexp/no-useless-flag -----
type RegexpNoUselessFlag = []|[{
  ignore?: ("i" | "m" | "s" | "g" | "y")[]
  strictTypes?: boolean
}]
// ----- regexp/no-useless-non-capturing-group -----
type RegexpNoUselessNonCapturingGroup = []|[{
  allowTop?: (boolean | ("always" | "never" | "partial"))
}]
// ----- regexp/optimal-quantifier-concatenation -----
type RegexpOptimalQuantifierConcatenation = []|[{
  capturingGroups?: ("ignore" | "report")
}]
// ----- regexp/prefer-character-class -----
type RegexpPreferCharacterClass = []|[{
  minAlternatives?: number
}]
// ----- regexp/prefer-d -----
type RegexpPreferD = []|[{
  insideCharacterClass?: ("ignore" | "range" | "d")
}]
// ----- regexp/prefer-lookaround -----
type RegexpPreferLookaround = []|[{
  lookbehind?: boolean
  strictTypes?: boolean
}]
// ----- regexp/prefer-named-replacement -----
type RegexpPreferNamedReplacement = []|[{
  strictTypes?: boolean
}]
// ----- regexp/prefer-range -----
type RegexpPreferRange = []|[{
  target?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/prefer-result-array-groups -----
type RegexpPreferResultArrayGroups = []|[{
  strictTypes?: boolean
}]
// ----- regexp/sort-character-class-elements -----
type RegexpSortCharacterClassElements = []|[{
  order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[]
}]
// ----- regexp/unicode-escape -----
type RegexpUnicodeEscape = []|[("unicodeCodePointEscape" | "unicodeEscape")]
// ----- regexp/unicode-property -----
type RegexpUnicodeProperty = []|[{
  generalCategory?: ("always" | "never" | "ignore")
  key?: ("short" | "long" | "ignore")
  property?: (("short" | "long" | "ignore") | {
    binary?: ("short" | "long" | "ignore")
    generalCategory?: ("short" | "long" | "ignore")
    script?: ("short" | "long" | "ignore")
  })
}]
// ----- require-atomic-updates -----
type RequireAtomicUpdates = []|[{
  allowProperties?: boolean
}]
// ----- require-unicode-regexp -----
type RequireUnicodeRegexp = []|[{
  requireFlag?: ("u" | "v")
}]
// ----- rest-spread-spacing -----
type RestSpreadSpacing = []|[("always" | "never")]
// ----- semi -----
type Semi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- semi-spacing -----
type SemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- semi-style -----
type SemiStyle = []|[("last" | "first")]
// ----- sort-imports -----
type SortImports = []|[{
  ignoreCase?: boolean
  
  memberSyntaxSortOrder?: [("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single")]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}]
// ----- sort-keys -----
type SortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
  ignoreComputedKeys?: boolean
}]
// ----- sort-vars -----
type SortVars = []|[{
  ignoreCase?: boolean
}]
// ----- space-before-blocks -----
type SpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- space-before-function-paren -----
type SpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- space-in-parens -----
type SpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- space-infix-ops -----
type SpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- space-unary-ops -----
type SpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- spaced-comment -----
type SpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- strict -----
type Strict = []|[("never" | "global" | "function" | "safe")]
// ----- switch-colon-spacing -----
type SwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- template-curly-spacing -----
type TemplateCurlySpacing = []|[("always" | "never")]
// ----- template-tag-spacing -----
type TemplateTagSpacing = []|[("always" | "never")]
// ----- unicode-bom -----
type UnicodeBom = []|[("always" | "never")]
// ----- unicorn/better-regex -----
type UnicornBetterRegex = []|[{
  sortCharacterClasses?: boolean
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  name?: string
  ignore?: unknown[]
}]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  checkArrowFunctions?: boolean
}]
// ----- unicorn/escape-case -----
type UnicornEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  terms?: string[]
  ignore?: unknown[]
  ignoreDatesOnPullRequests?: boolean
  allowWarningComments?: boolean
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  ignore?: unknown[]
  multipleFileExtensions?: boolean
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: unknown[]
  multipleFileExtensions?: boolean
})]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-push-push -----
type UnicornNoArrayPushPush = []|[{
  ignore?: unknown[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-instanceof-builtins -----
type UnicornNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  checkProperties?: boolean
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  checkArguments?: boolean
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/number-literal-case -----
type UnicornNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  octal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  number?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  getLastElementFunctions?: unknown[]
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  ignoreUsedVariables?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  checkInfinity?: boolean
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  minimumCases?: number
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations = []|[{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: _UnicornPreventAbbreviations_Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: _UnicornPreventAbbreviations_BooleanObject
  ignore?: unknown[]
}]
type _UnicornPreventAbbreviationsReplacements = (false | _UnicornPreventAbbreviations_BooleanObject) | undefined
interface _UnicornPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornPreventAbbreviationsReplacements | undefined
}
interface _UnicornPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  indent?: (string | number)
  tags?: string[]
  functions?: string[]
  selectors?: string[]
  comments?: string[]
}]
// ----- unused-imports/no-unused-imports -----
type UnusedImportsNoUnusedImports = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- unused-imports/no-unused-vars -----
type UnusedImportsNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- use-isnan -----
type UseIsnan = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]
// ----- valid-typeof -----
type ValidTypeof = []|[{
  requireStringLiterals?: boolean
}]
// ----- vitest/consistent-test-filename -----
type VitestConsistentTestFilename = []|[{
  pattern?: string
  allTestPattern?: string
}]
// ----- vitest/consistent-test-it -----
type VitestConsistentTestIt = []|[{
  fn?: ("test" | "it")
  withinDescribe?: ("test" | "it")
}]
// ----- vitest/expect-expect -----
type VitestExpectExpect = []|[{
  assertFunctionNames?: []|[string]
  additionalTestBlockFunctions?: string[]
}]
// ----- vitest/max-expects -----
type VitestMaxExpects = []|[{
  max?: number
}]
// ----- vitest/max-nested-describe -----
type VitestMaxNestedDescribe = []|[{
  max?: number
}]
// ----- vitest/no-focused-tests -----
type VitestNoFocusedTests = []|[{
  fixable?: boolean
}]
// ----- vitest/no-hooks -----
type VitestNoHooks = []|[{
  allow?: unknown[]
}]
// ----- vitest/no-large-snapshots -----
type VitestNoLargeSnapshots = []|[{
  maxSize?: number
  inlineMaxSize?: number
  allowedSnapshots?: {
    [k: string]: unknown[] | undefined
  }
}]
// ----- vitest/no-only-tests -----
type VitestNoOnlyTests = []|[{
  block?: string[]
  focus?: string[]
  functions?: string[]
  fix?: boolean
}]
// ----- vitest/no-restricted-matchers -----
type VitestNoRestrictedMatchers = []|[{
  [k: string]: (string | null) | undefined
}]
// ----- vitest/no-restricted-vi-methods -----
type VitestNoRestrictedViMethods = []|[{
  [k: string]: (string | null) | undefined
}]
// ----- vitest/no-standalone-expect -----
type VitestNoStandaloneExpect = []|[{
  additionalTestBlockFunctions?: string[]
}]
// ----- vitest/prefer-expect-assertions -----
type VitestPreferExpectAssertions = []|[{
  onlyFunctionsWithAsyncKeyword?: boolean
  onlyFunctionsWithExpectInLoop?: boolean
  onlyFunctionsWithExpectInCallback?: boolean
}]
// ----- vitest/prefer-lowercase-title -----
type VitestPreferLowercaseTitle = []|[{
  ignore?: ("describe" | "test" | "it")[]
  allowedPrefixes?: string[]
  ignoreTopLevelDescribe?: boolean
  lowercaseFirstCharacterOnly?: boolean
}]
// ----- vitest/prefer-snapshot-hint -----
type VitestPreferSnapshotHint = []|[("always" | "multi")]
// ----- vitest/require-hook -----
type VitestRequireHook = []|[{
  allowedFunctionCalls?: string[]
}]
// ----- vitest/require-top-level-describe -----
type VitestRequireTopLevelDescribe = []|[{
  maxNumberOfTopLevelDescribes?: number
}]
// ----- vitest/valid-expect -----
type VitestValidExpect = []|[{
  alwaysAwait?: boolean
  asyncMatchers?: string[]
  minArgs?: number
  maxArgs?: number
}]
// ----- vitest/valid-title -----
type VitestValidTitle = []|[{
  ignoreTypeOfDescribeName?: boolean
  allowArguments?: boolean
  disallowedWords?: string[]
  [k: string]: (string | [string]|[string, string] | {
    [k: string]: (string | [string]|[string, string]) | undefined
  })
}]
// ----- wrap-iife -----
type WrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- yield-star-spacing -----
type YieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- yoda -----
type Yoda = []|[("always" | "never")]|[("always" | "never"), {
  exceptRange?: boolean
  onlyEquality?: boolean
}]
// Names of all the configs
export type ConfigNames = 'pleisto/imports/rules' | 'pleisto/javascript/setup' | 'pleisto/javascript/rules' | 'pleisto/javascript/disables/cli' | 'pleisto/node/rules' | 'pleisto/react/setup' | 'pleisto/react/rules' | 'pleisto/test/setup' | 'pleisto/test/rules' | 'pleisto/regexp/rules' | 'pleisto/typescript/setup' | 'pleisto/typescript/parser' | 'pleisto/typescript/rules' | 'pleisto/typescript/disables/dts' | 'pleisto/typescript/disables/test' | 'pleisto/typescript/disables/cjs' | 'pleisto/unicorn/rules'
