import { test, expect } from '../fixtures/fixturepombase';

test('test inventory page', async ({ loginpomValid }) => {
    await expect(loginpomValid.page).toHaveURL(/inventory/);
});

test("test error message with wrong credentials", async ({ loginpomInvalid }) => {
    //await expect(loginpomInvalid.getErrorMessage()).toBeVisible();
    await expect(loginpomInvalid.getErrorMessage()).toHaveText("Epic sadface: Username and password do not match any user in this service");
});