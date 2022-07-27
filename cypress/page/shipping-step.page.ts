class ShippingStepPage {
    private checkbtn: string;
    private termsCheck: string;

    constructor() {
        this.checkbtn = ".cart_navigation .button";
        this.termsCheck = "#cgv";
    }

    public acceptTerms(): void {
        cy.get(this.termsCheck).click();
    }

    public proceedCheckout(): void {
        cy.get(this.checkbtn).click();
    }
}

export { ShippingStepPage };
