import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";


Given("l'utilisateur est connectée", () => {
    cy.visit("/");
    loginPage.submitLogin("standard_user", "secret_sauce");
  });

Given("l'utilisateur a trié les produits par prix décroissant", () => {
  ProductsPage.sortBy("Price (high to low)");
});

When("il ajoute les deux premiers produits au panier", () => {
    ProductsPage.addTopNProducts(2);
});

Then("le panier doit contenir {int} articles", (expectedCount) => {
    ProductsPage.verifyCartItemCount(expectedCount);
});