# 🧪 Cypress SauceDemo E2E

Un projet d'automatisation E2E ⚡️ robuste et lisible pour l'application [SauceDemo](https://www.saucedemo.com/), utilisant **Cypress**, **Cucumber (Gherkin)**, et une **architecture POM (Page Object Model)** moderne et évolutive.

---

## 📁 Structure du projet

```bash
.
├── cypress/
│   ├── e2e/
│   │   └── features/             # Fichiers .feature en Gherkin
│   │       └── step_definitions/ # Étapes liées aux features
│   ├── pages/                    # Page Object Models (Login, Products, etc.)
│   ├── support/                  # Commandes personnalisées, setup global
├── utils/                        # Fonctions utilitaires (formatage, etc.)
├── .github/workflows/           # Intégration continue via GitHub Actions
├── cypress.config.js            # Configuration Cypress
└── README.md
