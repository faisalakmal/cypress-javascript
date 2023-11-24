Cypress.Commands.add("login", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.wait(1000);
  cy.get('[data-test="password"]').type(password);
  cy.wait(1000);
  cy.get("#login-button").click();
});

Cypress.Commands.add("logins", (userType) => {
  cy.fixture("loginData").then((userData) => {
    const user = userData[userType];
    if (user) {
      cy.get('[data-test="username"]').type(user.username);
      cy.wait(1000);
      cy.get('[data-test="password"]').type(user.password);
      cy.wait(1000);
      cy.get("#login-button").click();
      cy.get(".product_label").should("be.visible");
    } else {
      throw new Error(
        `User type "${userType}" not found in loginData fixture.`
      );
    }
  });
});
