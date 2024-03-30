import { AppointmentConfirmationPage } from "../pageObjects/AppointmentConfirmationPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { BasePage } from "../pageObjects/BasePage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { LoginPage } from "../pageObjects/LoginPage";

describe("CURA Healthcare Service", () => {
    context("Grid", () => {
        beforeEach(() => {
            BasePage.visit();
        });

        it("Make an Appointment", () => {
            BasePage.makeAppointmentButton.click();
            LoginPage.usernameField.type("John Doe");
            LoginPage.passwordField.type("ThisIsNotAPassword");
            LoginPage.loginButton.click();

            AppointmentPage.facilityDropBox.select("Seoul CURA Healthcare Center");
            AppointmentPage.checkBox.click();
            AppointmentPage.medicaidRadioButton.click();
            AppointmentPage.dateLabel.click();
            AppointmentPage.day30.click();
            AppointmentPage.comment.type("CURA Healthcare Service");
            AppointmentPage.bookAppointmentButton.click();

            AppointmentConfirmationPage.facility.should("have.text", "Seoul CURA Healthcare Center");
            AppointmentConfirmationPage.hospitalReadmission.should("have.text", "Yes");
            AppointmentConfirmationPage.healthcareProgram.should("have.text", "Medicaid");
            AppointmentConfirmationPage.visitDate.should("have.text", "30/03/2024");
            AppointmentConfirmationPage.comment.should("have.text", "CURA Healthcare Service");

        });

        it("Appointment history empty", () => {
            BasePage.makeAppointmentButton.click();
            LoginPage.usernameField.type("John Doe");
            LoginPage.passwordField.type("ThisIsNotAPassword");
            LoginPage.loginButton.click();

            AppointmentPage.menu.click();
            AppointmentPage.sidebarMenu.should("class", "active");
            AppointmentPage.historyButton.click(); 
            
            HistoryPage.appointmentHistory.contains("No appointment.").should("have.text", "No appointment.");

        });





    });
});