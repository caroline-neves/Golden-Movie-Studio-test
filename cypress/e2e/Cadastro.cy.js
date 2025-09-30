

describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
  
});//Execução antes de cada teste

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol', 'Neves', email, '193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  it('Deve validar mensagem de erro com campo nome inválido', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol7362', 'Neves', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
  it('Deve validar mensagem de erro de sobrenome', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol', 'Neves10', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
  it('Deve validar mensagem de erro do campo email', () => {
    var email = `carol${Date.now()}.com`
    cy.PreencherCadastro('Carol', 'Neves', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
  it('Deve validar mensagem de erro senha fraca', () => {
    var email = `carol${Date.now()}@gmail.com`
    cy.PreencherCadastro('Carol', 'Neves', email, '7193362729', 'Teste')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
  it('Deve validar mensagem email duplicado', () => {
    var email = `carol@gmail.com`
    cy.PreencherCadastro('Carol', 'Neves', email, '7193362729', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')
  })
  // it.only('Deve encaminhar para tela de politicas', () => {
  //   cy.contains('a', 'Política de Privacidade')
  //     .should('have.attr', 'href', './polices.html').click()
  //   //cy.get('a').click()
    
    
  // })
  

})