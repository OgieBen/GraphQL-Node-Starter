import graphQlHttp from 'express-graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';


const query = new GraphQLObjectType({
        name: "RootQuery",
        description: ""

        field : {
            viewer: {
                type: GraphQLString,
                resolver() {
                    viewer: "viewer!";
                }
            }
        }
});

let schema  = new GraphQLSchema({
    query: query,
});

export default schema