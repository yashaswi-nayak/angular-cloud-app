pipeline{
    agent any;
    tools {
        node 'Node12'
    }
    stages{
        stage("Build"){
            steps{
                sh 'npm install'
                sh 'ng build --prod'
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

        // stage("Package"){
        //     steps{
        //         echo "====++++executing A++++===="
        //     }
        //     post{
        //         always{
        //             echo "====++++always++++===="
        //         }
        //         success{
        //             echo "====++++A executed successfully++++===="
        //         }
        //         failure{
        //             echo "====++++A execution failed++++===="
        //         }
        
        //     }
        // }   
    }
}