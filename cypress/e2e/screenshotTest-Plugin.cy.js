describe('Cypress Screenshot Testing - Using Plugin', function () {
    it('cy.screenshot() - take a screenshot', () => {
        cy.visit('index3.html')
        cy.matchImageSnapshot();
        // cy.matchImageSnapshot('test/snapshots/demo');


    })
})
