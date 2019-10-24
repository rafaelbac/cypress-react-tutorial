describe('Suite 1', function() {
  it('Passes #1', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All Systems Operational')
  })
  it('Fails', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All System Operational')
  })
  it('Passes #2', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All Systems Operational')
  })
})

describe('Suite 2', function() {
  it('Passes #3', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All Systems Operational')
  })
  it('Passes #3', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All Systems Operational')
  })
})
