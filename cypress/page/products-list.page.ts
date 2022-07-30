class ProductListPage {
    private additemBtn: string;
    private checkoutItem: string;
    private allProducts: string;
  
    constructor() {
      this.additemBtn = ".button-container a[title='Add to cart']";
      this.checkoutItem = ".button-container a[title='Proceed to checkout']";
      this.allProducts = ".product-container";
    }
  
    public addTShirtToCart(product:string): void {
      this.findProductByName(product).find(this.additemBtn).click();
    }
    
    private findProductByName (product:string) {
      return cy.get(this.allProducts).filter(`:contains(${product})`);
    }
  
    public proceedToCheckout(): void {
      cy.get(this.checkoutItem).click();
    }
  }
  
  export {ProductListPage};
