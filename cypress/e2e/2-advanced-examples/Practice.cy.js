import { demoqatests } from "../PageObject/textBox";
describe('OTA Savings',()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com');
    });
    it('Text Box Test Case',()=>{
        demoqatests.ClickonElements();
        demoqatests.clickOnTextBox();
        demoqatests.clickonUsername();
        demoqatests.clickonEmail();
        demoqatests.clickOnCurrentAddress();
        demoqatests.clickonPermanentAddress();
        demoqatests.clickonSubmitbutton();
    });
    it('web Tables' , () =>{
        demoqatests.ClickonElements();
        demoqatests.clickonwebtables();
        demoqatests.clickonAddnewRecord();
        demoqatests.clickonFirstname();
        demoqatests.clickonLastname();
        demoqatests.clickonEmailtable();
        demoqatests.clickonAge();
        demoqatests.clickonSalary();
        demoqatests.clickonDepartment();
        demoqatests.clickonSubmitbutton();




    })
});



// /// <refrence types = "Cypress"/>

// class Practice {

//     static gettitle(){
//         cy.get('.page-title').invoke('text').then('text1', => ()  {
// excpet(text1).to.eq('Automation Practice')



//         })
//     }
// static dropdown(){
//     cy.get('#dropdown-class-example').select('Selenium').should



// }





// }
// export default Practice;