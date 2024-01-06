describe('Cypress Screenshot Testing - Using Plugin', function () {


    it('cy.screenshot() - take a screenshot', () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.get('#input-email').type("lambdatest.Cypress@disposable.com");
        cy.get('#input-password').type("Cypress123!!");
        cy.get('[value="Login"]').click()
        cy.matchImageSnapshot();


    })
})
