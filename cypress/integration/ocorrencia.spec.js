///    <reference types='cypress' />

describe('Abertura de Ocorrência - Pós Venda', function() {
    it('Login', function() {
        cy.visit ('https://brc6autodsv.viverebrasil.com.br/platform/home')
        cy.get('#mat-radio-2').click()
        cy.get('.btn-submit').click()
        cy.LoginPosVenda() 
    })
    it('Módulo - Pós Venda', function() {
        cy.get(':nth-child(4) > .cursor-point').click()
        cy.wait(16000)
    })

    it('Pesquisando por número do Contrato, Proposta, CPF/CNPJ ou Nome do Participante', function() {
        cy.get('#search-input').type('AU0000003433') // Inserir o número do contrato
        cy.contains('Pesquisar').click()
    })

    it('Abertura de Ocorrência', function() {
        cy.get('select')
          .select('ACORDO')
          .should('have.value', 'ACORDO')  
    })
    
    
    

    })