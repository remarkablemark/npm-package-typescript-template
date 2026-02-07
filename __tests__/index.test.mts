import { name } from '../dist/index.mjs';

describe('index', () => {
  it('exports name', () => {
    assert.strictEqual(name, 'npm-package-typescript-template');
  });
});
