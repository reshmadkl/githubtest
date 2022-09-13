describe('Clarvine Test Suite', function(){

    it('Clarvine Test Case', function()
    {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Test')
        cy.get('[data-test="lastName"]').type('Tester')
        cy.get('[data-test="postalCode"]').type('12345')

        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="finish"]').click()

        
          
    })
})