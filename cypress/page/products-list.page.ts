class ProductListPage {
    private additemBtn: string;
    private checkoutItem: string;
  
    constructor() {
      this.additemBtn = ".button-container a[title='Add to cart']";
      this.checkoutItem = ".button-container a[title='Proceed to checkout']";
    }
  
    public addToCart(): void {
      cy.get(this.additemBtn).click();
    }
  
    public proceedToCheckout(): void {
      cy.get(this.checkoutItem).click();
    }
  }
  
  export {ProductListPage};
