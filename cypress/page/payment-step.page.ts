class PaymentStepPage {
    private payButton: string;
    private confirmOrderMessage: string;

    constructor() {
        this.payButton = "a.bankwire";
        this.confirmOrderMessage = "#cart_navigation>button>span";
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderMessage).click();
    }

    public bankwirePay(): void {
        cy.get(this.payButton).click()
    }

    public confirmMessage(message: string) {
        cy.get("#center_column > div > p > strong").should("have.text", message);
        return this;
    }
}
export { PaymentStepPage }
