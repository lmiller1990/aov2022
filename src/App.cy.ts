import App from './App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App)
  })
})