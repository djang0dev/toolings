module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "simple-import-sort",
        "import",
        "only-error",
        "unused-imports"
    ],
    "rules": {
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "PascalCase"
                ]
            }
        ],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-implicit-any-catch": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "default-case": "error",
        "import/exports-last": "error",
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/order": "off",
        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "lines-between-class-members": "off",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],
        "no-misleading-character-class": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-path-concat": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "sonarjs/no-duplicate-string": "off",
        "sort-imports": "off",
        "symbol-description": "error",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-null": "off",
        "unicorn/filename-case": [
            "error",
            {
                "cases": {
                    "camelCase": true,
                    "pascalCase": true,
                    "kebabCase": true
                }
            }
        ],
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array",
                "readonly": "array"
            }
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
            "error",
            "record"
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "as",
                "objectLiteralTypeAssertions": "allow"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface"
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                "prefer": "type-imports",
                "disallowTypeAnnotations": true
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "off",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true,
                "allowDirectConstAssertionInArrowFunctions": true,
                "allowConciseArrowFunctionExpressionsStartingWithVoid": false
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterOverload": true
            }
        ],
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                "allowWithDecorator": true
            }
        ],
        "@typescript-eslint/no-parameter-properties": [
            "error",
            {
                "allows": [
                    "private readonly",
                    "protected readonly",
                    "public readonly"
                ]
            }
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "func-style": [
            "error",
            "expression",
            {
                "allowArrowFunctions": true
            }
        ],
        "import/newline-after-import": [
            "error",
            {
                "count": 1
            }
        ],
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": true
            }
        ],
        "unicorn/prevent-abbreviations": [
            "error",
            {
                "ignore": [
                    ".*e2e.*"
                ]
            }
        ],
        "unused-imports/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true,
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ]
    }
}
