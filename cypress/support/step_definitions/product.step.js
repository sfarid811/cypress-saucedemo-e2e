import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";

Given("l'utilisateur est connecté", () => {
    cy.visit("/");
    loginPage.submitLogin("standard_user", "secret_sauce");
  });

  When("il ajoute le produit {string} au panier", (productName) => {
    ProductsPage.addProductToCart(productName);
  }); 

  Then("le panier contient {int} article(s)", (count) => {
    ProductsPage.verifyCartItemCount(count);
  });
  
  Then("le produit {string} est marqué comme ajouté", (productName) => {
    ProductsPage.verifyProductAdded(productName);
  });