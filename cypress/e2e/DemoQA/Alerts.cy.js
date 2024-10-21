describe('Test Demoqa Webtables section', () => {
    it('Test add user functionality', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You clicked a button');
        });
    })
})