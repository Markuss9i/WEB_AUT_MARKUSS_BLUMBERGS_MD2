export class AppointmentConfirmationPage{
    static get facility(){
        return cy.get('[id="facility"]');
    }

    static get hospitalReadmission(){
        return cy.get('[id="hospital_readmission"]');
    }

    static get healthcareProgram(){
        return cy.get('[id="program"]');
    }

    static get visitDate(){
        return cy.get('[id="visit_date"]');
    }

    static get comment(){
        return cy.get('[id="comment"]');
    }
}