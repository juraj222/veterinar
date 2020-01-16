pipeline {
  agent { label 'master' }

  stages {

    stage('Clone repository') {
        steps {
          git branch:'develop', url:'https://github.com/juraj222/veterinar.git'
        }
    }
    stage('Prepare') {
        steps {
            script{
              sh '/var/lib/jenkins/workspace/veterinar/build/cleanBeforeBuild.sh'
            }
        }
    }


    stage('Build image and run') {
        steps {
            sh '/var/lib/jenkins/workspace/veterinar/build/buildDocker.sh'
        }
    }
  }
}