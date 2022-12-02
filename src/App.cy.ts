import App from './App.vue'

describe('<App />', () => {
  it('finds and renders products', () => {
    cy.mount(App)
    cy.get('input').type('phone')
    cy.get('ul').children().should('have.length', 4)
  })

  it('alerts when no items are found', () => {
    cy.on('window:alert', (val) => {
      expect(val).to.eq(`No products found for asdfasdfa. Please try again.`)
    })

    cy.intercept('https://dummyjson.com/products/search*', {
      body: {
        products: []
      }
    }).as('req')

    cy.mount(App)
    cy.get('input')
      .type('asdfasdfa')
      .wait('@req')
  })
})
