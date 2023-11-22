pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
              git branch: 'main', url: 'https://github.com/Leonardo-JSilva/API-Cypress.git'
            }
        }
        stages {
        stage('Instalar dependencias') {
            steps {
              sh 'npm install'
            }
        }
        stages {
        stage('Executar testes') {
            steps {
              sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
