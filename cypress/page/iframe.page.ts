class IframePage {
    private pageURL: string;
    private cssBtn: string;
    private iframePageTitle: string;
    private cssPageURL: string;


    constructor() {
        this.pageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.cssPageURL = "https://www.w3schools.com/css/";
        this.cssBtn = "#topnav a[title='CSS Tutorial']";
        this.iframePageTitle = "iframe[title='W3Schools HTML Tutorial']";
    }
    visit() {
        cy.visit(this.pageURL);
    }

    getFrameTitle() {
        return cy.iframe(this.iframePageTitle).find("h1");
    }

    goToCssPageInFrame() {
        cy.iframe(this.iframePageTitle).find(this.cssBtn).click();
        cy.frameLoaded(this.iframePageTitle, { url: this.cssPageURL });
    }
}

export { IframePage };
