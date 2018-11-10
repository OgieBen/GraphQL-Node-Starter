import express from 'express';
import rootSchema from './data/schema/rootSchema'
import  graphqlHttp  from 'express-graphql';


const app = express();


app.use('/graphql', graphQlHttp({schema: rootSchema}))

export default app;