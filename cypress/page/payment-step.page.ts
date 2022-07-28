class PaymentStepPage {
    private payButton: string;
    private confirmOrderButton: string;
    private confMessage:string;
    

    constructor() {
        this.payButton = "a.bankwire";
        this.confirmOrderButton = ".cart_navigation";
        this.confMessage = "#center_column > div > p > strong";
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).contains("I confirm my order").click();
    }

    public bankwirePay(): void {
        cy.get(this.payButton).click()
    }

    public confirmMessage(message: string) {
        cy.get(this.confMessage).should("have.text", message);
        return this;
    }
}
export { PaymentStepPage }
