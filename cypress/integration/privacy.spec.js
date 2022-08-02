it('Testa a página da política de privavidade de forma independente', function() {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
  })