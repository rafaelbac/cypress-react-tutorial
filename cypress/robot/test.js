describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('/')
    cy.get('.page-status > .status').should('contain', 'All Systems Operational')
  })
})
