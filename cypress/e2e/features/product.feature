Feature: Ajout de produits au panier

Scenario: Ajout d’un produit au panier
  Given l'utilisateur est connecté
  When il ajoute le produit "Sauce Labs Backpack" au panier
  Then le panier contient 1 article
  And le produit "Sauce Labs Backpack" est marqué comme ajouté