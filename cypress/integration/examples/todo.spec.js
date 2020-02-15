describe('Todo App', function () {
  it('.should() - allow adding a new todo item', function () {
    cy.visit('http://localhost:3000');
    cy.get('input[data-cy=newItemField]').type('Write Test');
    cy.get('#addBtn').click();

    cy.get('tr[data-cy=todoItem]:nth-child(1)').should('contain', 'Write Test')
  })
});
