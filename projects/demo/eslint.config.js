// @ts-check
import { defineConfig } from 'eslint/config';
import rootConfig from '../../eslint.config.mjs';

export default defineConfig([
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-debugger': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        {
          ignoredMethodNames: ['constructor'],
        },
      ],
      '@angular-eslint/no-output-native': 'warn',
      '@angular-eslint/no-input-rename': ['warn'],
      '@angular-eslint/no-output-on-prefix': ['warn'],
      '@angular-eslint/no-pipe-impure': ['warn'],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
]);
