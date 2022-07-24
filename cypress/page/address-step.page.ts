class AddressStepPage {
    private addressButton: string;
    private accountPageURL: string;

    constructor() {
        this.addressButton = ".cart_navigation > .button > span";
        this.accountPageURL = "http://automationpractice.com/index.php?controller=order";
    }

    public visitloginPageURL(): void {
        cy.visit(this.accountPageURL)
    }

    public goTologinButton(): void {
        cy.get(this.addressButton).click();
    }
}
export { AddressStepPage}



















