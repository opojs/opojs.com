Opojs/opojs.com Web App

## Development

Simply spawn the server by running `$ npm run start:dev`.

## Deployment

1. Install `Docker`.
2. Pull the `Docker` image from the Docker Hub using `docker pull opojs/opojs.com`.
3. Verify if your image was correctly installed using the `docker images` command.
4. Run your image using `docker run -p [HOST_PORT]:[CONTAINER_PORT] -d opojs/opojs.com`.

You can obtain the container logs using `docker logs <container id>` and you can obtain the container id using `docker ps`.
