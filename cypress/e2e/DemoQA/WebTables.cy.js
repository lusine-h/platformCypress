describe('Test Demoqa Webtables section', () => {
    it.only('Test add user functionality', () => {

        const firstNameLocator = '#firstName'
        const lastNameLocator = '#lastName'
        const firstName = 'Test first name'
        const lastName = 'Test last name'


        cy.visit('https://demoqa.com/webtables')
        cy.url().should('contain', 'demoqa')
        cy.get('.text-center').should('contain', 'Web Tables')
        // cy.get('#addNewRecordButton').click()
        cy.contains('Add').click()
        cy.get(firstNameLocator).type(firstName)
        cy.get(lastNameLocator).type(lastName)
        cy.get('#userEmail').type('test@example.com')
        cy.get('#age').type('23')
        cy.get('#salary').type('34567890')
        cy.get('#department').type('wertyu')
        cy.get('#submit').click()
        cy.get('.rt-table .rt-tbody .rt-tr-group:nth-child(4)').should('exist')
    })

    it('Delete first existing user', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#gender-radio-1').click({force: true})
    })
    it('Check scroll to command', () => {
        cy.visit('https://demoqa.com/webtables')
        // cy.wait(2000)
        cy.get('.-pageInfo').siblings('span')
            .find('select').select('100').should('have.value','100')
        // cy.wait(3000)
        cy.scrollTo('bottom')
    })
})