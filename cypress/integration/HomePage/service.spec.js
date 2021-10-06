describe('GET patients', () => {
    it('get an answer', () => {
      cy.request({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }).then((response) => {
        expect(response.status).to.equal(200);
        
    
      })
    })
  })