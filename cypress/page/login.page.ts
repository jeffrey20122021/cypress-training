class LoginPage {
    private email:string;
    private psw: string;
    private loginBtn: string;

    constructor() {
        this.email = "#email";
        this.psw = "#passwd";
        this.loginBtn="SubmitLogin"
    }

    public login(email:string, passwd:string): void {
    cy.get(this.email).type(email);
    cy.get(this.psw).type(passwd);
    cy.get(this.loginBtn).click();
    }

}
export { LoginPage }
