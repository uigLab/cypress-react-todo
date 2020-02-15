describe('Todo App', function () {
  it('.should() - allow adding a new todo item', function () {
    cy.visit('http://localhost:3000');
    cy.get('input[data-cy=newItemField]').type('New Todo');
    cy.get('#addBtn').click();

    cy.get('tr[data-cy=todoItem]:last-child').should('contain', 'New Todo')
  })
});
