describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("/news*", { fixture: "top.json" }).as("top");
    cy.intercept("/newest*", { fixture: "new.json" }).as("new");
    cy.intercept("/show*", { fixture: "show.json" }).as("show");
    cy.intercept("/ask*", { fixture: "ask.json" }).as("ask");
    cy.intercept("/jobs*", { fixture: "jobs.json" }).as("jobs");
    cy.intercept("/v0/user/*.json", { fixture: "user.json" }).as("user");
  });

  it("should redirect to top", () => {
    cy.visit("/");
    cy.wait("@top");

    cy.url().should("include", "/top");
  });

  it("should go to top when home is clicked", () => {
    cy.visit("/new");
    cy.get(".logo").click();

    cy.url().should("include", "/top");
  });

  it("should go to top", () => {
    cy.visit("/");
    cy.get("app-header a").contains("Top").click();

    cy.url().should("include", "/top");
    cy.get("mat-card-title").should(
      "contain",
      "Open-source high-performance RISC-V processor"
    );
  });

  it("should go to new", () => {
    cy.visit("/");
    cy.get("app-header a").contains("New").click();

    cy.url().should("contain", "/new");
    cy.get("mat-card-title").should(
      "contain",
      "Apple’s 100 highest-ranking executives saw the VR headset last week"
    );
  });

  it("should go to show", () => {
    cy.visit("/");
    cy.get("app-header a").contains("Show").click();

    cy.url().should("contain", "/show");
    cy.get("mat-card-title").should(
      "contain",
      "Show HN: GPT-4 Reverse Turing Test"
    );
  });

  it("should go to ask", () => {
    cy.visit("/");
    cy.get("app-header a:nth-child(5)").click();

    cy.url().should("contain", "/ask");
    cy.get("mat-card-title").should(
      "contain",
      "Ask HN: Who the heck isnt gonna be prompting any time soon?"
    );
  });

  it("should go to jobs", () => {
    cy.visit("/");
    cy.get("app-header a").contains("Jobs").click();

    cy.url().should("contain", "/jobs");
    cy.get("mat-card-title")
      .first()
      .should(
        "contain",
        "Float Health (YC W22) Is Hiring Senior Software Engineer"
      );
  });

  it("should show user", () => {
    cy.visit("/user/burakemir");

    cy.get("mat-card-title").first().should("contain", "burakemir");
  });
});
