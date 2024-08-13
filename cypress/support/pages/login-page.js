class LoginPage {
  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  buttonLogin() {
    cy.get("#login-button").click();
  }

  login(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.wait(1000);
    cy.get('[data-test="password"]').type(password);
    cy.wait(1000);
    cy.get("#login-button").click();
  }
}

export default LoginPage;
