pipeline {
    agent any

    tools {node "nodejs"}

    stages {

        stage ("build") {
            steps {
                echo "testing an app"
                sh 'npm install'
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

