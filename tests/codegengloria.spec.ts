import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://glowria.com/');
  await page.getByRole('link', { name: 'account' }).click();

  await page.locator('#newEmail').fill('ikramtesting@gmail.com');
  await page.getByRole('button', { name: 'Inscription' }).click();

  await page.getByRole('textbox', { name: 'Prénom*', exact: true  }).fill('ikk');
 
  await page.getByRole('textbox', { name: 'Nom*', exact: true }).fill('ikk');

  await page.getByRole('textbox', { name: 'Confirmation de votre email*' }).fill('ikramtesting@gmail.ccom');
 

  await page.getByRole('textbox', { name: 'Créer un mot de passe*' }).fill('*scEi!Ve@pH6NZq');
  
  await page.getByRole('textbox', { name: 'JJ/MM/AAAA*' }).fill('02/02/2000');
  await page.locator('label').filter({ hasText: 'Je veux recevoir des offres' }).click();
  await page.locator('label').filter({ hasText: 'Je veux également recevoir' }).click();
  await page.locator('label').filter({ hasText: 'Je certifie être majeur, j’' }).click();
  await page.getByRole('textbox', { name: 'Confirmation de votre email*' }).click();
;
  await page.getByRole('button', { name: 'Inscription' }).click();
});