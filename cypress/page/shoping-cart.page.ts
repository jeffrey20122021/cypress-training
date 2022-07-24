class ShopingCartPage {
    private checkbtn: string;
  
    constructor() {
      this.checkbtn = ".cart_navigation span";
    }
  
    public pcheckout(): void {
      cy.get(this.checkbtn).click();
    }
  }
  
  export {ShopingCartPage};