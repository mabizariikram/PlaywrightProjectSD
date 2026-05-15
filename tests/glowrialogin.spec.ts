import { test, expect } from '@playwright/test';

test("login to web site glowria", async ({ page }) => {

  await page.goto("https://glowria.com/");

  // ouvrir la modal
  await page.locator(".modal__form").click();

  // vérifier popup inscription
  await expect(page.getByRole("heading", { name: "Créer un compte" })).toBeVisible();

  // email étape 1
  await page.getByPlaceholder("Email").fill("test@glowria.com");
  await page.getByRole("button", { name: "INSCRIPTION" }).click();

  // attendre navigation vers signup
  await expect(page).toHaveURL(/signup/);

  // ===== formulaire =====
  await page.locator("#customer_firstName").fill("test");
  await page.locator("#customer_lastName").fill("glowria");

  await page.locator("#customer_email").fill("test2332@glowria.com");
  await page.locator("#customer_email_confirmation").fill("test2332@glowria.com");

  await page.locator("#customer_password").fill("*scEi!Ve@pH6NZq");
  await page.locator("#customer_birthdate").fill("04/05/2003");

  // checkboxes (souvent mieux via locator direct)
  await page.locator("input[name='offers']").check();
  await page.locator("input[name='partners']").check();
  await page.locator("input[name='terms']").check();

  // soumettre
  await page.getByRole("button", { name: "INSCRIPTION" }).click();

  // vérification finale
  await expect(page).toHaveURL("https://glowria.com/");
});
// import { test, expect } from '@playwright/test';


// test("login  to web site glowria", async ({ page }) => {
//     await page.goto("https://glowria.com/");
//     await page.locator(".modal__form").click();
   
//      // etape d'inscription
//       await expect(page.getByRole("heading", { name: "Créer un compte" })).toBeVisible();
//       await page.getByRole("textbox", { name: "Email*" }).nth(1).fill("test@glowria.com");
//       await page.getByRole("button", { name: "INSCRIPTION" }).click();
//       //await expect(page).toHaveURL(/.*\/signup/);
//       await expect(page).toHaveURL(/signup/);
//       // await expect(page.url()).toContain("signup");
//       //ignorer les query params
//       //await expect(page).toHaveURL(url => url.pathname === "/signup");
//         await page.getByRole("textbox", { name: "Prénom*" }).fill("test");
        
//         //await page.locator("#customer_firstName").fill("test");
//         await page.getByRole("textbox", { name: "Nom*" }).fill("glowria");
//         await page.getByRole("textbox", { name: "Email*" }).fill("test22@glowria.com");
//         await page.getByRole("textbox", { name: "Confirmation de votre email*" }).fill("test22@glowria.com");
//         await page.getByRole("textbox", { name: "Mot de passe*" }).fill("*scEi!Ve@pH6NZq");
//         await page.getByRole("textbox",{name:"JJ/MM/AAAA*"}).fill("04/05/2003 ");

//         //Je veux recevoir des offres exclusives et des cadeaux dans mes prochaines box
//         await page.getByRole("checkbox", { name: "Je veux recevoir des offres exclusives et des cadeaux dans mes prochaines box" }).check();
//         //Je veux également recevoir des cadeaux de partenaires privilégiés de Glowria
//         await page.getByRole("checkbox", { name: "Je veux également recevoir des cadeaux de partenaires privilégiés de Glowria" }).check();
//        //Je certifie être majeur, j’accepte les conditions générales de vente et j’accepte que mes données personnelles soient utilisées tel que décrit ci-dessous et détaillé dans la Politique de protection des données personnelles.*
//         await page.getByRole("checkbox", { name: "Je certifie être majeur, j’accepte les conditions générales de vente et j’accepte que mes données personnelles soient utilisées tel que décrit ci-dessous et détaillé dans la Politique de protection des données personnelles." }).check();
//         //click sur insciption
//         await page.getByRole("button", { name: "INSCRIPTION" }).click();
//         //verification de l'inscription redirection vers la page d'accueil
//         await expect(page).toHaveURL("https://glowria.com/");




    

     
// });