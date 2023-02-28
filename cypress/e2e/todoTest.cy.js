describe('Todo test', () => {
  it('good add task', () => {
    cy.visit('http://localhost:3000')
    
    cy.get('#add-todo').type('task{enter}')

    cy.get('li.list-item').should('have.length', 1)

  
  })
  it('good done task', ( ) =>{
    cy.visit('http://localhost:3000')
    
    cy.get('#add-todo').type('task{enter}')
  
    cy.get('input#task-0').check()

    cy.get('li.list-item').should('have.text', 'task').and('have.length', 1)
  })

})