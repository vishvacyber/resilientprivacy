import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    languageOptions: {
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/no-unescaped-entities': 'off',
      'no-useless-escape': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/next-script-for-ga': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    files: ['src/lib/security.ts'],
    rules: {
      'no-control-regex': 'off',
    },
  },
]
