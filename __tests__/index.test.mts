import { name } from '../cjs/index.js';

describe('index', () => {
  it('exports name', () => {
    assert.strictEqual(name, 'npm-package-typescript-template');
  });
});
