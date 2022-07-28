class ShippingStepPage {
    private proceedToCheckout: string;
    private termsCheck: string;

    constructor() {
        this.proceedToCheckout = ".cart_navigation";
        this.termsCheck = "#cgv";
    }

    public accepttermsCheck(): void {
        cy.get(this.termsCheck).click();
    }

    public proceedCheckout(): void {
        cy.get(this.proceedToCheckout).contains("Proceed to checkout").click();
    }
}

export { ShippingStepPage };
