class ProductsPage {
    elements = {
      productItems: () => cy.get(".inventory_item"),
  
      productTitle: (productName) =>
        cy.contains(".inventory_item_name", productName),
  
      productCard: (productName) =>
        cy.contains(".inventory_item_name", productName)
          .parents(".inventory_item"),
  
      addToCartButton: (productName) =>
        cy.contains(".inventory_item_name", productName)
          .parents(".inventory_item")
          .find("button")
          .contains("Add to cart"),
  
      removeButton: (productName) =>
        cy.contains(".inventory_item_name", productName)
          .parents(".inventory_item")
          .find("button")
          .contains("Remove"),
  
      cartBadge: () => cy.get(".shopping_cart_badge"),
      cartIcon: () => cy.get(".shopping_cart_link"),
      sortDropdown: () => cy.get(".product_sort_container"),
    };
  
    /**
     * Vérifie qu’un produit est visible
     */
    verifyProductVisible(productName) {
      this.elements.productTitle(productName).should("be.visible");
    }
  
    /**
     * Ajoute un produit au panier
     */
    addProductToCart(productName) {
      this.elements.addToCartButton(productName).click();
    }
  
    /**
     * Supprime un produit du panier
     */
    removeProductFromCart(productName) {
      this.elements.removeButton(productName).click();
    }
  
    /**
     * Vérifie que le produit a bien été ajouté
     */
    verifyProductAdded(productName) {
      this.elements.removeButton(productName).should("be.visible");
    }
  
    /**
     * Ajoute plusieurs produits par nom
     */
    addMultipleProducts(products) {
      products.forEach((product) => {
        this.addProductToCart(product);
      });
    }
  
    /**
     * Vérifie que le panier affiche le bon nombre
     */
    verifyCartItemCount(expectedCount) {
      this.elements.cartBadge().should("have.text", expectedCount.toString());
    }
  
    /**
     * Navigue vers le panier
     */
    goToCart() {
      this.elements.cartIcon().click();
    }
  
    /**
     * Trie les produits via le menu déroulant
     */
    sortBy(optionLabel) {
      this.elements.sortDropdown().select(optionLabel);
    }

    addTopNProducts(count = 2) {
        cy.get(".inventory_item").each(($el, index) => {
          if (index < count) {
            cy.wrap($el)
              .find("button")
              .contains("Add to cart")
              .click();
          }
        });
      }
  }
  
  export default new ProductsPage();
  