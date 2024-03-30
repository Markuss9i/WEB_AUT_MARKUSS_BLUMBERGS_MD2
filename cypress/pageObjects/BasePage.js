export class BasePage {
    static visit() {
        return cy.visit(this.url);
    }

    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/";
    }

    static get makeAppointmentButton(){
        return cy.get('[id="btn-make-appointment"]');
    }

}