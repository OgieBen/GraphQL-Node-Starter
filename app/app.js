import express from 'express';
import rootSchema from './data/schema/rootSchema';
import  graphqlHttp  from 'express-graphql';


const app = express();


app.use('/graphql', graphqlHttp({schema: rootSchema, graphiql: true}));

export default app;