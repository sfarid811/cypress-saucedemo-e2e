import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";

Given("l'utilisateur accède à la page de connexion", () => {
  cy.visit("/");
});

When("il saisit le nom d'utilisateur {string}", (userName) => {
    loginPage.typeUsername(userName);
});

When('il saisit le mot de passe {string}', (password) => {
    loginPage.typePassword(password);
});

When('il clique sur le bouton de connexion', () => {
    loginPage.clickLogin();
});

Then("il est redirigé vers la page des produits", () => {
    cy.url().should("contains", "/inventory.html");
})

Then('un message d\'erreur {string} s\'affiche', (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage);
  });
