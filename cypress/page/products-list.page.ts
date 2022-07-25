class ProductListPage {
    private addbtn: string;
    private checkout: string;
  
    constructor() {
      this.addbtn = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
      this.checkout = "[style*='display: block;'] .button-container > a";
    }
  
    public addcart(): void {
      cy.get(this.addbtn).click();
    }
  
    public pcheckout(): void {
      cy.get(this.checkout).click();
    }
  }
  
  export {ProductListPage};
