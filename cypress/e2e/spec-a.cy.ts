// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test A1', () => {

  const toStrings = (cells$) => Cypress._.map(cells$, 'textContent')
  const toNumbers = (texts) => Cypress._.map(texts, Number)
  const sum = (numbers) => Cypress._.sum(numbers)
  

  cy.visit('/')


  cy.get('[data-cy=value]')
    .then(toStrings)
    .then(toNumbers)
    .then(sum)
    .then(cellsTotal => {
      cy.get('[data-cy=total]')
        .invoke('text')
        .should('eq', cellsTotal.toString())
    })

  
})
