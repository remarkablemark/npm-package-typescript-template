# Agents Guide

This file contains guidelines and commands for agentic coding agents working in this repository.

## Build & Development Commands

### Essential Commands

- `npm run build` - Build the library (outputs to dist/ with CJS, ESM, UMD formats)
- `npm run lint` - Run ESLint on all files
- `npm run lint:fix` - Auto-fix linting issues where possible
- `npm run lint:tsc` - Run TypeScript compiler check
- `npm test` - Run all tests once
- `npm run test:ci` - Run tests in CI mode with coverage
- `npm run test:watch` - Run tests in watch mode (no coverage)

### Running Single Tests

- `npm test -- run path/to/test.test.ts` - Run a specific test file
- `npm test -- run -t "test name"` - Run tests matching a name pattern
- `npm test -- --reporter=verbose` - Run with detailed output

### Additional Commands

- `npm run clean` - Remove build artifacts (coverage, dist, docs)
- `npm run docs` - Generate TypeDoc documentation
- `npm run docs:watch` - Generate docs with file watching
- `npm run lint:package` - Validate package structure with publint

## Code Style Guidelines

### Import Organization

- Imports are auto-sorted by eslint-plugin-simple-import-sort
- Order: external libraries → internal modules → relative imports
- Use `import type` for type-only imports
- Use ES6 import/export syntax exclusively

### Formatting

- Single quotes for strings (prettier config)
- 2-space indentation (default)
- Max line length: Prettier default (80)

### TypeScript Standards

- Strict mode enabled (tsconfig.json: `"strict": true`)
- No implicit any, all types must be explicitly defined
- Use `interface` for object shapes, `type` for unions/conditions
- Export types alongside implementations
- Prefer function declarations over arrow functions for named functions

### Naming Conventions

- camelCase for variables, functions, properties
- PascalCase for classes, interfaces, types
- UPPER_SNAKE_CASE for constants
- Files: kebab-case for utilities, camelCase for components

### Error Handling

- Throw Error instances with descriptive messages
- Use try/catch for async operations that may fail
- Return Result/Option patterns where appropriate instead of exceptions
- Never swallow errors silently

### Testing Standards

- Use Vitest with globals enabled
- Test files must be in `__tests__/` directory and end with `.test.ts`
- Coverage threshold is 100% (configured in vite.config.mts)
- Use descriptive test names with "it()" and "describe()"
- Mock external dependencies using vi.mock()

### Documentation

- All public APIs must have TSDoc comments
- Use `@param`, `@returns`, `@throws` tags appropriately
- Document examples in README.md
- TypeDoc generates documentation from source comments

### Git & Commit Guidelines

- Use conventional commits (commitlint configured)
- Pre-commit hook runs: build → typecheck → test → lint-staged
- Commit message format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore

### Build Configuration

- Vite handles bundling with multiple output formats
- DTS plugin generates TypeScript declarations
- Source maps enabled for debugging
- UMD builds available for browser usage

### Code Quality Tools

- ESLint with TypeScript support and strict rules
- Prettier for consistent formatting
- Husky for git hooks
- lint-staged for pre-commit checks
- publint for package validation

## Development Workflow

1. Make changes following style guidelines
2. Run `npm run lint:fix` to auto-fix formatting
3. Run `npm run test` to verify tests pass
4. Run `npm run build` to ensure successful compilation
5. Check `npm run lint:tsc` for type errors
6. Commit with conventional commit message
