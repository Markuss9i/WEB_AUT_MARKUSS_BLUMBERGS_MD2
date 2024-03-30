export class LoginPage{
    static get usernameField(){
        return cy.get('[id="txt-username"]');
    }

    static get passwordField(){
        return cy.get('[id="txt-password"]');
    }

    static get loginButton(){
        return cy.get('[id="btn-login"]');
    }
}