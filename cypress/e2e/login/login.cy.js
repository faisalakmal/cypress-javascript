describe("Login Feature", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  it("Success to login without fixtures and without custom command", () => {
    cy.fixture("users").then(() => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.wait(1000);
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.wait(1000);
      cy.get("#login-button").click();
      cy.get(".product_label").should("be.visible");
    });
  });

  it("Success to login without fixtures and custom command with parameter", () => {
    cy.login("standard_user", "secret_sauce");
  });

  it.only("Success to login with fixtures and custom command with parameter", () => {
    cy.logins("standardUser");
  });
});
