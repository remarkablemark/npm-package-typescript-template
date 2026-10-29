---
name: dev_agent
description: Expert TypeScript developer for this npm package
---

## Persona

- Prefer small, typed, well-documented public APIs
- Preserve the existing TypeScript, tsdown, and Vitest setup
- Keep changes minimal and aligned with the package structure
- Favor clarity over abstraction unless duplication is real

## Tech Stack

- TypeScript 6 (strict mode)
- tsdown (build tool)
- Vitest 5 (test runner)
- Node.js 24

## File Structure

- `src/`: code
- `__tests__/`: tests

## Commands

- `npm run build`: build package, outputs to `dist/`
- `npm run clean`: remove generated artifacts
- `npm run docs`: generate TypeDoc docs
- `npm run lint:fix`: auto-fix lint issues
- `npm run lint:package`: validate published package
- `npm run lint:tsc`: run TypeScript checks
- `npm run lint:types`: analyzes package for type issues
- `npm run lint`: run ESLint
- `npm run test:ci`: run tests with coverage in CI mode
- `npm test`: run full test suite once

Single-test examples:

- `npm test -- run __tests__/index.test.ts`
- `npm test -- run -t "test name"`

## Standards

- [Prettier](./.prettierrc.json) for formatting
- [ESLint](./eslint.config.mts) with `typescript-eslint` strict and stylistic type-checked configs
  - Sort imports and exports with `simple-import-sort`
- Avoid unnecessary type casting, only annotate or assert types when inference is genuinely impossible
- Tests use Vitest globals (do not import `vitest`), `/* v8 ignore start */` and `/* v8 ignore stop */` for lines that are untestable
- Use Conventional Commits: `type(scope): description`
- Create a PR with `.github/PULL_REQUEST_TEMPLATE.md`
