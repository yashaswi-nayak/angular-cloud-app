pipeline{
    agent any;

    stages{
        stage("Build"){
            steps{
                nodejs(nodeJSInstallationName: 'Node12') {
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
            post{
                success{
                    echo "BUILD SUCCESSFUL"
                }
                failure{
                    echo "BUILD FAIL"
                }
            }
        }

        stage("Package"){
            steps{
                sh 'sudo docker build -t angular-webapp .'
            }
            post{
                success{
                    echo "PACKAGING SUCCESSFUL"
                }
                failure{
                    echo "PACKAGING FAIL"
                }
        
            }
        }

        stage("Deploy"){
            steps{
                sh 'echo $(sudo docker rm -vf angular-webapp)'
                sh 'sudo docker run -d -p 80:80 --name angular-webapp angular-webapp:latest'
            }
            post{
                success{
                    echo "DEPLOYMENT SUCCESSFUL"
                }
                failure{
                    echo "DEPLOYMENT FAIL"
                }
        
            }
        }   
    }
}
