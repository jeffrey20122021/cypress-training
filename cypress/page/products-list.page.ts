class ProductListPage {
    private addbtn: string;
    private checkout: string;
  
    constructor() {
      this.addbtn = ".button-container a[title='Add to cart']";
      this.checkout = ".button-container a[title='Proceed to checkout']";
    }
  
    public addcart(): void {
      cy.get(this.addbtn).click();
    }
  
    public pcheckout(): void {
      cy.get(this.checkout).click();
    }
  }
  
  export {ProductListPage};
