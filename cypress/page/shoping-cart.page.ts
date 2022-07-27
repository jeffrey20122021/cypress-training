class ShopingCartPage {
    private checkbtn: string;
  
    constructor() {
      this.checkbtn = ".cart_navigation";
    }
  
    public proceedTocheckout(): void {
      cy.get(this.checkbtn).click();
    }
  }
  
  export {ShopingCartPage};
  