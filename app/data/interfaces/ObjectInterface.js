import { GraphQLInterface, GraphQLNonNull, GraphQLID } from 'graphql';
import { Repo } from '../repo/Repo'

let repo = new Repo();

let ObjectInterface = new GraphQLInterface({
    name: "ObjectInterface",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },

        // source: current data
        resolveType(source){
            repo.handleTypeResolver(source);
        }
    }
});


export default ObjectInterface;