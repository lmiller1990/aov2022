import App from './App.vue'

describe('<App />', () => {
  it('fetch some products', () => {
    cy.mount(App)
    cy.get('input').type('phone')
    cy.get('ul').children().should('have.length', 4)
  })

  it('shows an alert when no products are found', () => {
    cy.intercept(`https://dummyjson.com/products/search*`, {
      body: {
        products: []
      }
    })

    cy.on('window:alert', (val) => {
      expect(val).to.eq('No products were found. Please try again.')
    })

    cy.mount(App)
    cy.get('input').type('dog')
    cy.get('ul').children().should('have.length', 0)
  })
})