describe("In the patient page shows the patient", ()=>{


    it("Photo", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileImg]")
       

    });
    it("Name", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileName]")
       

    });
    it("Email", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileEmail]")
       

    });
    it("Gender", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileGender]")
       

    });
    it("Birth", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileBirth]")
        

    });
    it("Phone", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profilePhone]")
        

    });
    it("Nationality", () =>{


        cy.visit('/patient/4578')
        cy.get("[data-cy=profileNat]")
        
    })

})