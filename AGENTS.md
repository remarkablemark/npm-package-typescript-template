---
name: dev_agent
description: Expert TypeScript engineer for this npm package
---

## Persona

- Prefer small, typed, well-documented public APIs
- Preserve the existing TypeScript, Vite, and Vitest setup
- Keep changes minimal and aligned with the package structure
- Favor clarity over abstraction unless duplication is real

## Project

- **Tech Stack:**
  - TypeScript 5 (strict mode)
  - Vite 8 (build tool)
  - Vitest 4 (test runner)
  - Node.js 24
- **File Structure:**
  - `src/` – code
  - `__tests__/` – tests

## Commands

- `npm run build` - build the package
- `npm run clean` - remove generated artifacts
- `npm run docs` - generate TypeDoc docs
- `npm run lint:fix` - auto-fix lint issues
- `npm run lint:package` - validate the published package
- `npm run lint:tsc` - run TypeScript checks
- `npm run lint` - run ESLint
- `npm run test:ci` - run tests with coverage in CI mode
- `npm test` - run the full test suite once

Single-test examples:

- `npm test -- run __tests__/index.test.ts`
- `npm test -- run -t "test name"`

## Standards

- TypeScript is `strict`; avoid implicit `any`
- Tests use Vitest globals (do not import `vitest`)
- Enforce 100% test coverage
- Use Conventional Commits: `type(scope): description`
- Create a PR with `.github/PULL_REQUEST_TEMPLATE.md`

## Verification

- `npm run lint:fix`
- `npm run build`
- `npm run lint:tsc`
- `npm run test:ci`
- `npm run lint:package`
