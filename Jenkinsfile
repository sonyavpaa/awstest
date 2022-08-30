// pipeline {
//   agent any

//   stages {

//     stage ("build"){
//       steps{
//         // sh `npm i`
//         echo "building my app..."
//       }
//     }

//     stage ("test") {
//       steps{
//         echo "testing my app.."
//       }
//     }
//     stage ("deploy") {
//       steps {
//         echo "deploying my app..."
//       }
//     }

//   }
// }



pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh "chmod +x -R ./scripts/test.sh"
                sh './scripts/test.sh'
            }
        }
         stage('Deliver') {
                            steps {
                                sh "chmod +x ./scripts/deliver.sh"
                                sh './scripts/deliver.sh'
                                input message: 'Finished using the Rat-in-maze app? (Click "Proceed" to continue)'
                                sh "chmod +x ./scripts/kill.sh"
                                sh './scripts/kill.sh'
                            }
                        }
            }
      }