describe('Todo App', function () {
  it("should expect state on load", () => {
    cy.visit('/');
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        todos: [{ id: 1, value: "Buy Milk", done: false }]
      });
  })
});
