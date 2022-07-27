class ShippingStepPage {
    private checkbtn: string;
    private termsCheck: string;

    constructor() {
        this.checkbtn = ".cart_navigation .button span";
        this.termsCheck = "#cgv";
    }

    public check(): void {
        cy.get(this.termsCheck).click();
    }

    public proceedCheckout(): void {
        cy.get(this.checkbtn).click();
    }
}

export { ShippingStepPage };
