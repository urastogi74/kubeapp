pipeline {
    agent any

environment {
        DOCKER_IMAGE = 'firstapp1'
        DOCKER_TAG = 'v1'
    }

    stages {
       
        stage('Check Workspace') {
            steps {
                sh 'ls -alh'  // List all files in the workspace to check if Dockerfile is there
            } }
        
     stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                  //  docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")

                sh 'docker build -f examples/Dockerfile -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }
            stage('run Docker Image') {
            steps {
                script {
                 sh  'docker run -p 3000:3000 $DOCKER_IMAGE:$DOCKER_TAG'
                
                }
           }
            }
    }
}
