import { test, expect } from '../fixtures/testpro-base';

test('test inventory page', async ({ loggedPage }) => {
    await expect(loggedPage).toHaveURL(/inventory/);
});