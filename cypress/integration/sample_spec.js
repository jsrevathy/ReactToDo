describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', () => {
    it('Visits Todomatic', () => {
      cy.visit('localhost:3000')

    })
  })
  