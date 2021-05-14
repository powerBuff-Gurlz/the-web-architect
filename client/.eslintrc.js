module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
      webextensions: true
    },
    parserOptions: { sourceType: "module" }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended'],
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        settings: { react: { version: 'detect' } },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended', // TypeScript rules
          'plugin:react/recommended', // React rules
          'plugin:react-hooks/recommended', // React hooks rules
          'plugin:jsx-a11y/recommended', // Accessibility rules
          'plugin:prettier/recommended', // Prettier plugin
        ],
        rules: {
          // We will use TypeScript's types for component props instead
          'react/prop-types': 'off',
          // No need to import React when using Next.js
          'react/react-in-jsx-scope': 'off',
          // This rule is not compatible with Next.js's <Link /> components
          'jsx-a11y/anchor-is-valid': 'off',
          "no-underscore-dangle": ["off"],
          "react/no-multi-comp": [1, { "ignoreStateless": true }],
          "react/jsx-props-no-spreading": "off",
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "off",
          "no-template-curly-in-string": "off",
          // Why would you want unused vars?
          '@typescript-eslint/no-unused-vars': ['error'],
          'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
          "prefer-destructuring": ["error", { "object": true, "array": false }],
          // I suggest this setting for requiring return types on functions only where useful
          '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
              allowExpressions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
          ],
        },
      },
    ],
  }
  