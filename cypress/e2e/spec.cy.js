describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Navigate to pokemon page from homepage', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})