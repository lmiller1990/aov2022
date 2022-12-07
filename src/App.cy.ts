import App from './App.vue'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(App)
    cy.get('[data-cy="select-1"]').select('iPhone 9 - $549')
    cy.get('[data-cy="select-2"]').select('iPhone 9 - $549')
    cy.get('[data-cy="message"]').should('have.text', 'Items have the same price.')
  })

  it('renders', () => {
    cy.mount(App)
    cy.get('[data-cy="select-1"]').select('iPhone 9 - $549')
    cy.get('[data-cy="select-2"]').select('Tree Oil 30ml - $12')
    cy.get('[data-cy="message"]').should('have.text', 'Instead of buying 1 iPhone 9 you can buy 45 number of Tree Oil 30ml.')
  })
})