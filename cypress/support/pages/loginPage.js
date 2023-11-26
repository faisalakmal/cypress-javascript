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
}

export default new LoginPage();
