/// <refrence types ="Cypress"/>
import QA_Elements from './PageObject/textBox.js'

describe('First POM for Demo qa', function (){
before(function(){
    //QA_Elements.loadhomepage()
})
    it('DEMO QA page test cases',function(){
        cy.visit('/')
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
        QA_Elements.TextBox();
         
    })
    it('checkbox',()=>{
        QA_Elements.Checkbox();
        QA_Elements.RadioButton();
        QA_Elements.webtables();
        QA_Elements.Buttons();
        QA_Elements.Links();
        QA_Elements.Download();
    })
})