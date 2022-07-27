class ProductListPage {
    private additembtn: string;
    private checkoutitem: string;
  
    constructor() {
      this.additembtn = ".button-container a[title='Add to cart']";
      this.checkoutitem = ".button-container a[title='Proceed to checkout']";
    }
  
    public addToCart(): void {
      cy.get(this.additembtn).click();
    }
  
    public proceedToCheckout(): void {
      cy.get(this.checkoutitem).click();
    }
  }
  
  export {ProductListPage};
