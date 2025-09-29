

describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
  
});//Execução antes de cada teste

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol', 'Neves', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  it('Deve validar mensagem de erro com campo nome inválido', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol7362', 'Neves', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', '{"message":"Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"}')
  })

})