export class AppointmentPage {
    static get facilityDropBox(){
        return cy.get('[id="combo_facility"]');
    }

    static get checkBox(){
        return cy.get('[id="chk_hospotal_readmission"]');
    }

    static get medicaidRadioButton(){
        return cy.get('[id="radio_program_medicaid"]');
    }

    static get dateLabel(){
        return cy.get('[id="txt_visit_date"]');
    }

    static get day30(){
        return cy.get('.day').contains(30);
    }

    static get comment(){
        return cy.get('[id="txt_comment"]');
    }

    static get bookAppointmentButton(){
        return cy.get('[id="btn-book-appointment"]');
    }

    static get menu(){
        return cy.get('[id="menu-toggle"]');
    }

    static get sidebarMenu(){
        return cy.get('[id="sidebar-wrapper"]');
    }

    static get historyButton(){
        return cy.get('a[href*="history.php#history"]');
    }
}
