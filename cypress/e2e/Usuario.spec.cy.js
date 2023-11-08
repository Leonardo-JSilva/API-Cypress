import usuarios from '../contratos/usuarios.contract'

describe('Teste de API ServeRest', () => {

  it('Deve validar contrato de usuários', () => {
    cy.request('http://localhost:3000/usuarios').then(response => {
      return usuarios.validateAsync(response.body)
    })
});
})


  it('Deve listar usuarios cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios'
    }).then((response) => {
      expect(response.body.usuarios[0])
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.lessThan(500)

    })
  });

  it('Deve validar um usuário com email inválido', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login',
      body: {
        "email": "Erolsal@ebac.com",
        "password": "teste"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401)
      expect(response.body.message).to.equal('Email e/ou senha inválidos')

    })
  });


