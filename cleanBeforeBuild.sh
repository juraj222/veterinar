docker rm $(docker stop $(docker ps -a -q --filter ancestor=webserver-image:v1 --format="{{.ID}}"))