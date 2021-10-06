describe("When enter in the home page shows", () => {
  it("The Company Name", () => {
    cy.visit("/");

    cy.contains("Pharma Inc");
   
  });
  it("The Company Logo", () => {
    cy.visit("/");

    cy.get("[data-cy=logo]");
   
  });
  it("The Profile Icon", () => {
    cy.visit("/");

    cy.get("[data-cy=profile]");
   
  });
  it("The SearchBar", () => {
    cy.visit("/");

    cy.get("[data-cy=searchBar]");
    
  }),
    it("The TableCell's Title's", () => {
      cy.visit("/");

      cy.get("[data-cy=name]");
      cy.get("[data-cy=gender]");
      cy.get("[data-cy=birth]");
      cy.get("[data-cy=actions]");
      
    });
  it("The names, genders, births and actions", () => {
    cy.visit("/");

    cy.get("[data-cy=nameValue]").contains("A");
    cy.get("[data-cy=genderValue]").contains("a");
    cy.get("[data-cy=dateValue]").contains("0");
    cy.get("[data-cy=actionValue]").contains("details");
    
  });
  it("The loading more button", () => {
    cy.visit("/");

    cy.get("[data-cy=loadingMore]");
    
  });
});

describe("When user click on the loading more button", () => {
  it("The list increase", () => {
    cy.visit("/");

    cy.get("[data-cy=loadingMore]").click();

    cy.get("[data-cy=actionValue]").should("to.have.length", 100);
    
  });
});

describe("When user click on the details button", () => {
  it("The current patient profile opens", () => {
    cy.visit("/");

    cy.get("[data-cy=actionValue]").contains("details").click();
    
  });
});
