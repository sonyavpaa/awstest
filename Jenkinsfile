pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage ("build") {
            steps {
                echo "testing an app"
                sh "npm install"
                sh "npm run"
            }
        }
        stage ("test") {
            steps {
                echo "testing my app..."
            }
        }
        stage ("deploy") {
            steps {
                echo "testing my app..."
            }
        }
    }
}

