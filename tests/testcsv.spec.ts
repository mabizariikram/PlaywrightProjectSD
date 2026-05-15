// Import de Playwright pour écrire les tests et faire les assertions
import { expect, test } from '@playwright/test';

// Import du Page Object Model pour le login
import { loginpom } from '../pages/loginpom.page';

// Import du module File System pour lire des fichiers
import fs from 'fs'; // On utilise fs pour lire le fichier CSV qui contient nos jeux de données

// Import du parseur CSV pour convertir le CSV en objets JavaScript
import { parse } from 'csv-parse/sync';//Cette librairie permet de convertir le CSV en données compréhensibles par Playwright

// Import du module path pour gérer les chemins de fichiers de manière sûre
import path from 'path';//Path permet de construire le chemin du fichier sans problème selon le système

// Déclaration de la variable qui contiendra notre Page Object login
let lp: loginpom;

// Lecture du fichier CSV et transformation en tableau d'objets
const users = parse(
  fs.readFileSync(path.join(__dirname, 'data/jdd.csv')), // Lecture du fichier jdd.csv
  {
    columns: true,         // Utiliser la première ligne comme noms de colonnes (username, password, result)
    skip_empty_lines: true // Ignorer les lignes vides
  }
);

// Définition du test Playwright
test("login jdd", async ({ page }) => {

  // Boucle sur chaque utilisateur dans le CSV
  for (const user of users!) {

    // Initialisation du Page Object login pour la page actuelle
    lp = new loginpom(page);

    // Ouverture de la page login
    await page.goto("https://www.saucedemo.com/");

    // Saisie du username depuis le CSV
    await lp.saisieUsername(user!.username);

    // Saisie du password depuis le CSV
    await lp.saisiePassword(user!.password);

    // Clic sur le bouton login
    await lp.clickLogin();

    // Vérification du résultat attendu
    if (user!.result == "success") {
      // Si le login est censé réussir, vérifier qu'on est bien redirigé vers la page inventory
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    } else {
      // Sinon, vérifier qu'un message d'erreur est visible
      await expect(page.locator("[data-test='error']")).toBeVisible();
      //await expect(page.locator("[data-test='error']")).toBeVisible();
    }

    // Fin de la boucle pour cet utilisateur, passe au suivant
  }

// Fin du test
});

