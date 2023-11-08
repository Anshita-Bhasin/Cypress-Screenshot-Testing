describe('Cypress Screenshot Testing', function () {

    it('cy.screenshot() - take a screenshot', () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.screenshot({ log: false })

    })

})