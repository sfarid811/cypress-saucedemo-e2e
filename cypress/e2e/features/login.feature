Feature: Connexion à l'application SauceDemo

  Scenario: Connexion réussie avec un utilisateur valide
    Given l'utilisateur accède à la page de connexion
    When il saisit le nom d'utilisateur "standard_user"
    And il saisit le mot de passe "secret_sauce"
    And il clique sur le bouton de connexion
    Then il est redirigé vers la page des produits


    Scenario: Connexion échouée avec un utilisateur bloqué
    Given l'utilisateur accède à la page de connexion
    When il saisit le nom d'utilisateur "locked_out_user"
    And il saisit le mot de passe "secret_sauce"
    And il clique sur le bouton de connexion
    Then un message d'erreur "Epic sadface: Sorry, this user has been locked out." s'affiche