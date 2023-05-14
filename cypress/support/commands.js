Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`${selector}`);
});
