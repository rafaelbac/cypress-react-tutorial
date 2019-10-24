describe('Suite 3', function() {
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
