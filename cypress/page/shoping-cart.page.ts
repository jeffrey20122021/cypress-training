class ShopingCartPage {
    private checkbtn: string;
  
    constructor() {
      this.checkbtn = ".cart_navigation span";
    }
  
    public ProceedTocheckout(): void {
      cy.get(this.checkbtn).click();
    }
  }
  
  export {ShopingCartPage};
  