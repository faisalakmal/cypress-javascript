import LoginPage from "../../support/pages/loginPage";

describe("Login Feature", () => {
  before(() => {
    cy.clearCookies();
  });

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Success to login", () => {
    LoginPage.login("standard_user", "secret_sauce");
    cy.get('[data-test="title"]').should("be.visible");
  });

  it("Success to login", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.wait(1000);
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.wait(1000);
    cy.get("#login-button").click();
    cy.get('[data-test="title"]').should("be.visible");
  });

  it("Success to login", () => {
    cy.fixture("users").then(data => {
      cy.get('[data-test="username"]').type(data.standarUser);
      cy.wait(1000);
      cy.get('[data-test="password"]').type(data.password);
      cy.wait(1000);
      cy.get("#login-button").click();
      cy.get('[data-test="title"]').should("be.visible");
    });
  });

  it("Success to login", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get('[data-test="title"]').should("be.visible");
  });

  it("Success to login", () => {
    cy.fixture("users").then(data => {
      cy.login(data.standarUser, data.password);
      cy.get('[data-test="title"]').should("be.visible");
    });
  });

  it("Success to login", () => {
    cy.loginCustom("standardUser");
  });
});
