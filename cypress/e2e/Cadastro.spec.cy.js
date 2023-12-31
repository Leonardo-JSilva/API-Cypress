describe('Funcionalidades do Cadastro', () => {

  

  it('Cadastrar usuario com sucesso', () => {
    
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/usuarios',
      body: {
        "nome": "Eron Sales",
        "email": "EronCRsales@ebac.com",
        "password": "teste",
        "administrador": "true"
      },

    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')

    })

  });

  it('Deve alterar um usuário já cadastrado', () => {
    cy.request('http://localhost:3000/usuarios/IBps4Mlai9CGzwzH').then(response => {
      let id = response.body._id
      cy.request({
        method: 'PUT',
        url: `http://localhost:3000/usuarios/${id}`,
        headers: {authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVyb2xzYWxlc0BlYmFjLmNvbSIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE2OTk0MDc2NDMsImV4cCI6MTY5OTQwODI0M30.qAJgx2MoF1RsoT5Uoy3GzED2U8ew0p-Oq1SPjOuq9CU"},
        body: {
          "nome": "Eron CR7 Sales",
          "email": "Eronsales@ebac.com",
          "password": "teste",
          "administrador": "true"
        }

      }).then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
    })

  })

})

it('Excluir usuario já cadastrado', () => {
  cy.cadastro("Michael Martin", "MichaelR8@ebac.com", "teste", "true")
  .then(response => {
    let id = response.body._id
    cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/usuarios/${id}`
      

    }).then(response =>{
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('Registro excluído com sucesso')
    })
  })

});
