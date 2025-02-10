import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['projects/**/*'],
  },
  ...compat
    .extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts'],
    })),
  {
    files: ['**/*.ts'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
    },

    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          prefix: 'ngx',
          style: 'kebab-case',
          type: 'element',
        },
      ],

      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'ngx',
          style: 'camelCase',
          type: 'attribute',
        },
      ],
    },
  },
  ...compat.extends('plugin:@angular-eslint/template/recommended').map((config) => ({
    ...config,
    files: ['**/*.html'],
  })),
  {
    files: ['**/*.html'],
    rules: {},
  },
];
