import 'reflect-metadata';

import http from 'http';
import express from 'express';
import morgan from 'morgan';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchemaSync, } from 'type-graphql';
import { AccountResolver } from './resolver';


const app = express();

app.use(
  morgan('dev'),
);

const schema = buildSchemaSync({
  resolvers: [AccountResolver]
});

app.all('/gql', createHandler({
  schema,
}));


const server = http.createServer(app);
server.listen(4444, () => {
  console.log('Listening to ::4444');
});
