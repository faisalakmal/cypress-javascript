import loginPage from "./pages/loginPage";

Cypress.Commands.add("login", (username, password) => {
  loginPage.fillUsername(username);
  cy.wait(1000);
  loginPage.fillPassword(password);
  cy.wait(1000);
  loginPage.buttonLogin();
});

Cypress.Commands.add("loginCustom", userType => {
  cy.fixture("loginData").then(userData => {
    const user = userData[userType];
    if (user) {
      loginPage.fillUsername(user.username);
      cy.wait(1000);
      loginPage.fillPassword(user.password);
      cy.wait(1000);
      loginPage.buttonLogin();
      cy.get('[data-test="title"]').should("be.visible");
    } else {
      throw new Error(
        `User type "${userType}" not found in loginData fixture.`
      );
    }
  });
});
