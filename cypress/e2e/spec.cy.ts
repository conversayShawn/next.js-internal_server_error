describe("template spec", () => {
  it("visits home", () => {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("visits second page and clicks link", () => {
    cy.visit("/secondPage");
    cy.url().should("include", "/secondPage");
    cy.get("div").contains("Go back to my first page").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("verifies env var", () => {
    cy.visit("/");
    console.log(Cypress.env("FEATURE_FLAGS"));
    expect(Cypress.env("FEATURE_FLAGS")).to.eq("banana");
  });
});
