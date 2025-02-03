pipeline {
    agent any

environment {
        DOCKER_REGISTRY = "urastogi74"
        DOCKER_IMAGE = 'kubeapp'
        DOCKER_TAG = 'v1'
        K8S_DEPLOYMENT_FILE = "deployment.yaml"
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
                
                sh 'docker build -f Dockerfile -t $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub and push the image
                    sh 'docker login -u urastogi74 -p Umang@8052'
                    sh 'docker push $DOCKER_REGISTRY/$IMAGE_NAME:$DOCKER_TAG'
                }
            }
        }
          stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Set up Kubernetes access (use your kubeconfig or Kubernetes plugin)
                    sh 'kubectl apply -f k8s/$K8S_DEPLOYMENT_FILE'
                }
            }
        }
    }

    post {
        success {
            echo "Deployment Successful"
        }

        failure {
            echo "Deployment Failed"
        }
    }
}
    }
}
