import {MenuContentPage} from "../page/index";

const menuContentPage = new MenuContentPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    cy.get("[style*=' display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();
    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin").click();
    cy.get(".cart_navigation > .button > span").contains("Proceed to checkout").click();
    cy.get("#cgv").click();
    cy.get(".cart_navigation > .button > span").contains("Proceed to checkout").click();
    cy.get(".bankwire").contains("Pay by bank wire").click();
    cy.get("#cart_navigation > .button > span").contains("I confirm my order").click();
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
