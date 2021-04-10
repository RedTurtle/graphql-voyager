require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const voyager = require('graphql-voyager/middleware');

if (!process.env.GRAPHQL_ENDPOINT) {
  console.error('GRAPHQL_ENDPOINT environment variable not set!');
  process.exit(1);
}

const app = express();

const proxy = createProxyMiddleware({
  target: process.env.GRAPHQL_ENDPOINT,
  changeOrigin: true,
});

app.use(process.env.GRAPHQL_PATH || '/graphql', proxy);

app.use('/', voyager.express({ endpointUrl: process.env.GRAPHQL_PATH || '/graphql' }));

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    throw new Error(
      `Failed to start listening on ${port}, error: ${err.message}`
    );
  }
  console.log(`listening on http://0.0.0.0:${port}`);
});
