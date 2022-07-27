class ProductListPage {
    private addbtn: string;
    private checkout: string;
  
    constructor() {
      this.addbtn = ".button-container a[title='Add to cart']";
      this.checkout = ".button-container a[title='Proceed to checkout']";
    }
  
    public addTocart(): void {
      cy.get(this.addbtn).click();
    }
  
    public proceedToCheckout(): void {
      cy.get(this.checkout).click();
    }
  }
  
  export {ProductListPage};
