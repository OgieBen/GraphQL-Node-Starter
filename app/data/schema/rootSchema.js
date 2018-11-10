import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql';


const query = new GraphQLObjectType({
        name: "RootQuery",
        description: "",
        fields:{
            viewer: {
                type: GraphQLString,
                resolve() {
                    return "viewer!";
                }
            }
        }
});

let schema  = new GraphQLSchema({
    query: query,
});

export default schema