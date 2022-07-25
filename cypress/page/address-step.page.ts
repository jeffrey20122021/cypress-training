class AddressStepPage {
    private addressButton: string;

    constructor() {
        this.addressButton = ".cart_navigation > .button > span";
    }

    public goTologinButton(): void {
        cy.get(this.addressButton).click();
    }
}
export { AddressStepPage }
