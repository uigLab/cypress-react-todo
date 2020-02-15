# Cypress: E2E testing with React todo app

## Quick start
Open bash from the root directory & run -
```bash
1. clone the repo and move into it
2. yarn
3. yarn start
```

You will see our live todo app running at http://localhost:3000/

## Run tests with Cypress

Open another bash instance from the root directory & run -

```bash
1. yarn cypress open
2. click todo.spec.js in Cypress test runner
```
A new browser instance will open up and run the test visually.

## How to work with test files

```
Open ./cypress/integration/todo.spec.js
```

Here we see some code like this
```js
//cypress/integration/todo.spec.js

describe('Todo App', function () {
  it('.should() - allow adding a new todo item', function () {
    cy.visit('http://localhost:3000');
    cy.get('input[data-cy=newItemField]').type('New Todo');
    cy.get('#addBtn').click();

    cy.get('tr[data-cy=todoItem]:nth-child(1)').should('contain', 'New Todo')
  })
});
```
Code Steps:
 * First we connects to your app `cy.visit('http://localhost:3000')`
 * Then it types `'New Todo'` to the input `[data-cy=newItemField]` field
 * Then it clicks on the `#addBtn` button.
 * Finally we validate that the first `tr` element contains the `'New Todo'` string.

The `cy` variable that you are using to interact with your application is a global Cypress object that drives the tests. It has various helper methods to visit web pages, interact with web elements, and also to fetch data present in the DOM.


### Note
Cypress bundles the chai assertion library and the matchers you see in the test is chained to the Cypress helper methods seamlessly for readability.
