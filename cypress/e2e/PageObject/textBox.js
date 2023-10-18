import { locatorstextbox } from "./locator/locator";
export class DemoQALogic {
    TypeUsername() {
        locatorstextbox.elements.username().type('hello');
    }
    clickOnCurrentAddress() {
        locatorstextbox.elements.CurrentAddress().type('Plot 6 Sector C DHA Phase 6')
    }
    ClickonElements() {

        locatorstextbox.elements.Elements().click();
    }
    clickOnTextBox() {
        locatorstextbox.elements.textBox().click()
    }
    clickonUsername() {
        locatorstextbox.elements.Username().type('Hello Syed')
    }
    clickonEmail() {
        locatorstextbox.elements.Email().type('mohsinraza.devsinc@gmail.com')
    }
    clickonPermanentAddress() {
        locatorstextbox.elements.PermanentAddress().type('House # 448 Mohallah Gohar Shah Jhang Sadar')
    }
    clickonSubmitbutton() {
        locatorstextbox.elements.Submit().click()
    }
    clickonAddnewRecord() {
        locatorstextbox.Tables.AddnewRecord().click()
    }
    clickonFirstname() {
        locatorstextbox.Tables.Firstname().type('Syed Mohsin')
    }
    clickonLastname() {
        locatorstextbox.Tables.Lastname().type('Raza')
    }
    clickonEmailtable() {
        locatorstextbox.Tables.Emailtables().type('Engr.mohsin572@gmail.com')
    }
    clickonAge() {
        locatorstextbox.Tables.Age().type('29')
    }
    clickonSalary() {
        locatorstextbox.Tables.Salary().type('25000')
    }
    clickonDepartment() {
        locatorstextbox.Tables.Department().type('Quality Assurance')

    }
    clickonwebtables() {
        locatorstextbox.Tables.webtables().click()
    }

}
export const demoqatests = new DemoQALogic;


// /// <refrence types ="Cypress"/>
// //import locatorTextBox from cypress/e2e/PageObject/locator/locator.js
// import { locatorTextBox } from "./locator/locator"

// class QA_Elements{

//  static TextBox(){
//      locatorTextBox.username.type('Syed_Raza')
//      cy.get('#userEmail').type('mohsin.raza@devsinc.com')
//      cy.get('#currentAddress').type('Gulberg 2nd Lahore')
//      cy.get('#permanentAddress').type('Jhang Sadar')
//      cy.get('#submit').click()

// }
// static Checkbox(){ 
//  cy.visit("https://demoqa.com/checkbox")
//  cy.get('.rct-node-icon').click({ multiple: true })

// }

// static RadioButton(){
//  cy.visit("https://demoqa.com/radio-button")
//  cy.get(':nth-child(1) > .custom-control-label').click({ multiple: true })
// } 


// static webtables(){
//  cy.visit("https://demoqa.com/webtables")
//  cy.get('#addNewRecordButton').click()
//  cy.get('#firstName').type('Shah')
//  cy.get('#lastName').type('Jee')
//  cy.get('#userEmail-label').type('test@mailinator.com')
//  cy.get('#age').type('28')
//  cy.get('#salary').type('45000')
//  cy.get('#department').type('SQA')
//  cy.get('#submit').click()
// }

// static Buttons(){
//  cy.visit("https://demoqa.com/buttons") 
//  cy.get('#doubleClickBtn').click()
// }
// static Links(){
//  cy.visit("https://demoqa.com/links")
//  cy.get('#simpleLink').click()

// }  
// static Download(){
//  cy.visit("https://demoqa.com/upload-download")
//  cy.get('#uploadFile').click()
//  cy.get('#downloadButton').click()

// }  


// }
// export default QA_Elements