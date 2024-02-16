describe('Cypress Screenshot Testing - Using Plugin', function () {
    it('cy.screenshot() - take a screenshot', () => {
        cy.visit('index.html')
        cy.matchImageSnapshot('test/snapshots/demo');

    })
})
