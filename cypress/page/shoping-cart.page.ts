class ShopingCartPage {
    private proceedCheckout: string;
  
    constructor() {
      this.proceedCheckout = ".cart_navigation a[title='Proceed to checkout'";
    }
  
    public proceedToCheckout(): void {
      cy.get(this.proceedCheckout).click();
    }
  }
  
  export {ShopingCartPage};
  