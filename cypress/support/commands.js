Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('rodrigo.rodrigues.almeida1@gmail.com')
    cy.get('#open-text-area').type('Executando o primeiro exercício da aula 2')
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('LoginPosVenda', function() {
    cy.get('#username').type('ADMINISTRADOR')
    cy.get('#password').type('!QAZ2wsx')
    cy.contains('Acessar').click()
    cy.wait(1000)
    cy.get('.input-validator').type('000378')
    cy.get('.btn-validar').click()
    cy.wait(1000)

})