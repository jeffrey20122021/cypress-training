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

    public confirmMessage(message: string) {
        cy.get("#center_column > div > p > strong").should("have.text", message);
        return this;
}
}
export { PaymentStepPage }
