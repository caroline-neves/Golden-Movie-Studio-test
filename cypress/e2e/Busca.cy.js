
describe('US-001-Funcionalidade: Buscar Filmes', () => {
beforeEach(() => {
  cy.visit('/')
  
});//Execução antes de cada teste
afterEach(() => {
    cy.screenshot()
});

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')

    })
    it('Deve buscar todos os filmes da lista', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });
    it('Deve buscar um filme inexistente', () => {
            cy.get('#search-input').type('jbclhabs')
            cy.get('#search-button').click()
            cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    });
    it('Deve limpar após uma busca', () => {
            cy.get('#search-input').type('Inception')
            cy.get('#search-button').click()
            cy.get('#clear-button').click()
            cy.get('#results-section > :nth-child(1)').should('have.length', 0)
    });

    

})