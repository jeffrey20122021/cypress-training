class  PaymentStepPage {
    private payButton: string;
    private confirmOrder: string;

    constructor() {
        this.payButton = "a.bankwire";
        this.confirmOrder = "#cart_navigation>button>span";
    }

    public confirmOrderm(): void {
        cy.get(this.confirmOrder).click();
    }

    public bankwirepay(): void {
        cy.get(this.payButton).click()
    }
}
export { PaymentStepPage }