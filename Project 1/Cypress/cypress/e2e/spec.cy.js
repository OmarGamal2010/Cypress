import "@4tw/cypress-drag-drop";
describe("Cypress Test Cases", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Login Validation", () => {
    it("Cannot log in with username only", () => {
      cy.get("#username").type("bash");
      cy.get(`[data-cy="submit-button"]`).click();
      cy.get("#success-message").should("not.be.visible");
    });

    it("Cannot log in with password only", () => {
      cy.get("#password").type("password123");
      cy.get(`[data-cy="submit-button"]`).click();
      cy.get("#success-message").should("not.be.visible");
    });

    it("Username must start and end with #", () => {
      cy.get("#username").type("bash");
      cy.get("#password").type("password123");
      cy.get(`[data-cy="submit-button"]`).click();
      cy.get("#success-message").should("not.be.visible");
    });
  });

  describe("Dropdown Selection ", () => {
    it("Selects Option 1 and verifies the message", () => {
      cy.get("#dropdown").select("option1");
      cy.get("#dropdown-message").should("contain", "You selected: option1");
    });

    it("Selects Option 2 and verifies the message", () => {
      cy.get("#dropdown").select("option2");
      cy.get("#dropdown-message").should("contain", "You selected: option2");
    });
  });
  describe("Checkbox Interaction ", () => {
    it("Verify checkbox functionality and displayed messages", () => {
      cy.get("#agree").check();
      cy.get("#checkbox-message").should("contain", "You agreed to the terms!");
    });
    it("Verify checkbox functionality and displayed messages", () => {
      cy.get("#agree").uncheck();
      cy.get("#checkbox-message").should(
        "contain",
        "You disagreed with the terms."
      );
    });
  });

  describe("User Interactions ", () => {
    it("Triggers action on double-click", () => {
      cy.get("#double-click-area").dblclick();
    });

    it("Triggers action on right-click", () => {
      cy.get("#right-click-area").rightclick();
    });

    it("Drags and drops an item successfully", () => {
      cy.get("#drag-item").drag("#drop-zone");
    });

    it("Scrolls to the bottom of a scrollable box", () => {
      cy.get("#scroll-container").scrollTo("bottom");
    });
  });
});
