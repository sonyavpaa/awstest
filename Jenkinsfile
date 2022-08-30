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

        stage ("build") {
            steps {
                echo "testing an app"
                sh 'npm start'
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
