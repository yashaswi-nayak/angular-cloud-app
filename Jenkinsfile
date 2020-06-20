pipeline{
    agent any;

    stages{
        stage("Build"){
            steps{
                nodejs(nodeJSInstallationName: 'Node12') {
                    npm install
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