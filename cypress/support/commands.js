/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`${selector}`);
});

Cypress.Commands.add("login", (username, password) => {
  // cy.get(".oxd-input[name='username']").type(username);
  // cy.get(".oxd-input[name='password']").type(password);
  // cy.get(".oxd-button").click();

  cy.xpath("//input[@name='username']").type(username);
  cy.xpath("//input[@name='password']").type(password);
  cy.xpath("//button[@type='submit']").click();
});
