import test from 'node:test';
import assert from 'node:assert/strict';

import { getTokenFromRequest } from '../src/utils/helper.js';

test('extracts bearer tokens from authorization headers', () => {
    const req = {
        headers: {
            authorization: 'Bearer demo-token'
        },
        cookies: {}
    };

    assert.equal(getTokenFromRequest(req), 'demo-token');
});

test('falls back to cookie tokens when no authorization header exists', () => {
    const req = {
        headers: {},
        cookies: {
            accessToken: 'cookie-token'
        }
    };

    assert.equal(getTokenFromRequest(req), 'cookie-token');
});
