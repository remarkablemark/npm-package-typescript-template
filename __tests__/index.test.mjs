import { describe, it } from 'node:test';

import assert from 'assert';

import * as index from '../esm/index.js';

describe('index', () => {
  it('exports object', () => {
    assert.strictEqual(typeof index, 'object');
  });
});
