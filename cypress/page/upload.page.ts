class UploadPage {
    private uploadToPageURL: string;
    private selectFile: string;
    private uploadBtn: string;
    private msgconfirmUpload: string;
    private uploadedFile: string;

    constructor() {
        this.uploadToPageURL = "https://the-internet.herokuapp.com/upload";
        this.selectFile = "#file-upload";
        this.uploadBtn = "#file-submit";
        this.msgconfirmUpload = "#content  > div > h3";
        this.uploadedFile = "#uploaded-files";
    }

    public visitPage(): void {
        cy.visit(this.uploadToPageURL);
    }

    public uploadFile(file: string): void {
        cy.get(this.selectFile).attachFile(file);
        cy.get(this.uploadBtn).click();
    }

    public msgConfirmation(msg: string, fileName: string): void {
        cy.get(this.msgconfirmUpload).should("have.text", msg);
        cy.get(this.uploadedFile).should("contain", fileName);
    }
}

export { UploadPage };
