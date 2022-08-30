pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage ("build") {
            steps {
                echo "testing an app"
                sh "npm start"
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

