class LoginPage {
    private email:string;
    private password: string;
    private loginBtn: string;

    constructor() {
        this.email = "#email";
        this.password = "#passwd";
        this.loginBtn="#SubmitLogin";
    }

    public login(email:string, passwd:string): void {
    cy.get(this.email).type(email);
    cy.get(this.password).type(passwd);
    cy.get(this.loginBtn).click();
    }

}
export { LoginPage }
