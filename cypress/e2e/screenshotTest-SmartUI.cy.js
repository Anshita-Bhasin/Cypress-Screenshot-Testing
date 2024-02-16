describe('Cypress Screenshot Testing', function () {


    it('Cypress Screenshot Test - take a screenshot', () => {
        cy.visit('index.html')
        cy.screenshot('Test');

    })
})
