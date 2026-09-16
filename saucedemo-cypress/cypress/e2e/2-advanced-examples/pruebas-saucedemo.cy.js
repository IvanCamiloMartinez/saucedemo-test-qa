/// <reference types="Cypress" />

describe ('Suite de pruebas Saucedemo', function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://www.saucedemo.com/")
      })

    it('1. Login exitoso', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('2. Login usuario incorrecto', function () {
        cy.get('[data-test="username"]').type('wrong_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('3. Login password incorrecto', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()
    })

    it('4. Login usuario vacio', function () {
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username is required')
    })

    it('5. Login password vacio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Password is required')
    })

    it('6. Login inputs vacios', function () {
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username is required', 'Password is required')
    })

    it('7. Explorar catálogo verificar nombre', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
       cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible',6)
    })

    it('8. Explorar catálogo verificar imagen', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible',6)
    })


    it('9. Explorar catálogo verificar precio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('be.visible',6)
    })

    it('10. Explorar catálogo filtrar por AZ', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('az')
    })

    it('11. Explorar catálogo filtrar por AZ', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('za')
    })

    it('12. Explorar catálogo filtrar por menor precio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('lohi')
    })

    it('13. Explorar catálogo filtrar por mayor precio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('hilo')
    })

    it('14. Agregar productos al carrito', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()
    })

    it('15. Quitar productos del carrito', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

       cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').and('contain', 'Remove').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible').and('contain', 'Remove').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible').and('contain', 'Remove').click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('be.visible').and('contain', 'Remove').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible').and('contain', 'Remove').click()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('be.visible').and('contain', 'Remove').click()
    })

    it('17. Finalizar compra', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="checkout"]').should('be.visible').and('contain', 'Checkout').click()

        cy.get('[data-test="firstName"]').type('Ivan')
        cy.get('[data-test="lastName"]').type('Martinez')
        cy.get('[data-test="postalCode"]').type('111411')
        cy.get('[data-test="continue"]').should('be.visible').and('contain', 'Continue').click()
        cy.get('[data-test="finish"]').should('be.visible').and('contain', 'Finish').click()
    })

    it('18. Completar datos para checkout  - Datos vacios', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="checkout"]').should('be.visible').and('contain', 'Checkout').click()
        cy.get('[data-test="continue"]').click()
    })

    it('19. Completar datos para checkout  - Nombre vacio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="checkout"]').should('be.visible').and('contain', 'Checkout').click()

        cy.get('[data-test="lastName"]').type('Martinez')
        cy.get('[data-test="postalCode"]').type('111411')
        cy.get('[data-test="continue"]').should('be.visible').and('contain', 'Continue').click()
        cy.get('[data-test="finish"]').should('be.visible').and('contain', 'Finish').click()
    })
    it('20. Completar datos para checkout  - Apellido vacio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="checkout"]').should('be.visible').and('contain', 'Checkout').click()

        cy.get('[data-test="firstName"]').type('Ivan')
        cy.get('[data-test="postalCode"]').type('111411')
        cy.get('[data-test="continue"]').should('be.visible').and('contain', 'Continue').click()
        cy.get('[data-test="finish"]').should('be.visible').and('contain', 'Finish').click()
    })
    it('21. Completar datos para checkout  - Código postal vacio', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click()

        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="checkout"]').should('be.visible').and('contain', 'Checkout').click()

        cy.get('[data-test="firstName"]').type('Ivan')
        cy.get('[data-test="lastName"]').type('Martinez')
        cy.get('[data-test="continue"]').should('be.visible').and('contain', 'Continue').click()
        cy.get('[data-test="finish"]').should('be.visible').and('contain', 'Finish').click()
    })

    it.only('1. Logout exitoso', function () {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
        cy.get('[data-test="logout-sidebar-link"]').should('be.visible').and('contain', 'Logout').click({force: true})
    })


       
})

  