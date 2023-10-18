class textbox{
    elements={
        Elements : ()=> cy.get('.category-cards > :nth-child(1)'),
        textBox:()=>cy.get(':nth-child(1) > .element-list > .menu-list > #item-0'),
        Username:()=>cy.get('#userName'),
        Email:() =>cy.get('#userEmail'),
        CurrentAddress:()=>cy.get('#currentAddress'),
        PermanentAddress :() => cy.get('#permanentAddress'),
        Submit : () => cy.get('#submit'),
    }
    Tables ={
        webtables : ()=> cy.get(':nth-child(1) > .element-list > .menu-list > #item-3'),
        AddnewRecord : () => cy.get('#addNewRecordButton'),
        Firstname : ()=> cy.get('#firstName'),
        Lastname : ()=> cy.get('#lastName'),
        Emailtables :() => cy.get('#userEmail'),
        Age : () => cy.get('#age'),
        Salary: () => cy.get('#salary'),
        Department :() => cy.get('#department'),
        Submit:() =>cy.get('#submit')



    }
}
export const locatorstextbox = new textbox;



// export class textbox{

//     locatortextbox = {
//         username: () => cy.get('#userName')
//     }
//     getlocator
// }

// export const textbox = new textbox()