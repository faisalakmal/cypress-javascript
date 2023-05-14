describe("MyTestSuite", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("positive - verify the title page", () => {
    cy.title().should("equal", "OrangeHRM");
  });

  it("negative - verify the title page", () => {
    cy.title().should("not.equal", "Orange HRM");
  });
});
