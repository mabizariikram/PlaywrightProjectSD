pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.57.0-jammy'
        }
    }

    stages {

        stage('Clone repo') {
            steps {
                git url: 'https://github.com/mabizariikram/PlaywrightProjectSD.git', branch: 'main'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }

    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
        }
    }
}   