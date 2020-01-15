pipeline {
  agent { label 'master' }

  stages {

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        steps {
          git branch:'develop', url:'https://github.com/juraj222/veterinar.git'

        }
    }
    stage('Prepare') {
        steps {
          // dir ('root/projects/veterinar') {
            script{
              sh 'cleanBeforeBuild.sh'
            }
          // }
        }
    }


    stage('Build image and run') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        steps {
          // dir ('root/projects/veterinar') {
            sh 'buildDocker.sh'
          // }
        }
    }
  }
}