import LoginPage from "../../support/pages/login-page";

const loginPage = new LoginPage();

describe("Login Feature", () => {
  before(() => {
    cy.clearCookies();
  });

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Success to login", () => {
    loginPage.login("standard_user", "secret_sauce");
    cy.get('[data-test="title"]').should("be.visible");
  });
});
