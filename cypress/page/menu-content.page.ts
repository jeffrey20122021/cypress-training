class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string;
    private dress : string;

    constructor() {
        this.dress = "#block_top_menu >ul > li > a[title='Dresses']"
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public visitDressMenu(): void{
        cy.get(this.dress).click();
      }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }
}

export { MenuContentPage }
