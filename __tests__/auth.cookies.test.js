import test from 'node:test';
import assert from 'node:assert/strict';

test('production cookies are cross-site compatible', async () => {
    process.env.NODE_ENV = 'production';
    const { cookiesOption } = await import('../src/config/config.js');

    assert.equal(cookiesOption.sameSite, 'none');
    assert.equal(cookiesOption.secure, true);
});
