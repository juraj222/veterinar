if [ "$(docker ps -a -q --filter ancestor=webserver-image:v1 --format="{{.ID}}")" -ge 1 ]
then
    docker rm $(docker stop $(docker ps -a -q --filter ancestor=webserver-image:v1 --format="{{.ID}}"))
else
    echo "docker already clean"
fi