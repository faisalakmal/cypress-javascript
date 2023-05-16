import users from "./../../fixtures/users.json";

describe("Login Feature", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Successfull", () => {
    /** default command */
    // cy.get(".oxd-input[name='username']").type(users.username);
    // cy.wait(1000);
    // cy.get(".oxd-input[name='password']").type(users.password);
    // cy.wait(1000);
    // cy.get(".oxd-button").click();

    /** custom command */
    // cy.getByData(".oxd-input[name='username']").type(users.username);
    // cy.wait(1000);
    // cy.getByData(".oxd-input[name='password']").type(users.password);
    // cy.wait(1000);
    // cy.getByData(".oxd-button").click();
    // cy.get(".oxd-topbar-header-title").should("have.text", "Dashboard");

    /** custom command with parameter */
    cy.login(users.username, users.password);
    cy.get(".oxd-topbar-header-title").should("have.text", "Dashboard");
  });

  it("Unsuccessfull", () => {
    cy.getByData(".oxd-input[name='username']").type(users.username);
    cy.wait(1000);
    cy.getByData(".oxd-input[name='password']").type(users.wrongPassword);
    cy.wait(1000);
    cy.getByData(".oxd-button").click();
    cy.get(".oxd-alert")
      .should("be.visible")
      .and("have.text", "Invalid credentials");
  });
});
