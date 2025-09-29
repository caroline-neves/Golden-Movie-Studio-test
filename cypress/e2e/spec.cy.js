describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Caroline') 
    cy.get('#signup-lastname').type('Neves')
    cy.get('#signup-email').type('teste2@gamil.com')
    cy.get('#signup-phone').type('153267292')
    cy.get('#signup-password').type('Teste@2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})