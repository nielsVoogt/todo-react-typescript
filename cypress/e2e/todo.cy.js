/// <reference types="cypress" />

describe("todo app", () => {
  beforeEach(() => {});

  it("displays no todo items by default", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="empty-message"]').should("be.visible");
  });

  it("displays error when trying to submit a empty field", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="todo-form-error"]').should("be.visible");
  });

  const addTodos = () =>
    cy.wrap(["todo 1", "todo 2", "todo 3"]).each((text) => {
      return new Cypress.Promise((resolve) => {
        cy.get('[data-cy="todo-input"]').type(text);
        cy.get('[data-cy="submit"]').click();
        resolve();
      });
    });

  it("adds a number of todos", () => {
    cy.visit("http://localhost:3000/");
    addTodos();
  });

  it("delete a todo", () => {
    cy.visit("http://localhost:3000/");
    addTodos();
    cy.get('[data-cy="list-item"]')
      .first()
      .within(() => cy.get('[data-cy="delete-todo"]').click());
    cy.get('[data-cy="todo-list"] li').should("have.length", 2);
  });
});
