class ProductListPage {
    private addbtn: string;
    private checkout: string;
  
    constructor() {
      this.addbtn = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
      this.checkout = "[style*='display: block;'] .button-container > a";
    }
  
    public addtocart(): void {
      cy.get(this.addbtn).click();
    }
  
    public pchecjout(): void {
      cy.get(this.checkout).click();
    }
  }
  
  export {ProductListPage};