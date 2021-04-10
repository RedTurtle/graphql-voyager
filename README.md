# graphql-voyager
Graphql Voyager express server with http proxy

## Configuration

Configuration is done through environment variables.
 
* GRAPHQL_ENDPOINT: the graphql server (**required**) *e.g. http://myserver.org*
* GRAPHQL_PATH: the graphql endpoint path on the server (default ``/graphql``)
* PORT: the port this server will listen on (default 5000)

## Run this server

You can run this server with docker like this:

```shell
$ docker run --init -e GRAPHQL_ENDPOINT=http://myserver.org -p 5000:5000 redturtletech/graphql-voyager:main
```

