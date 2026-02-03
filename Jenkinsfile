@Library('myLib') _

pipeline {
    agent { label "new-agent" }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Deploy') {
            steps {
                dockerBuild()
            }
        }
    }
}
