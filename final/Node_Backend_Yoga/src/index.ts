import { GraphQLServer, PubSub } from 'graphql-yoga';
import { DataService } from 'dataService';
import { DataGenerator } from 'data-generator';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { importSchema } from 'graphql-import'
import { GraphQLField, GraphQLEnumValue } from 'graphql';

class DeprecatedDirective extends SchemaDirectiveVisitor {
    public visitFieldDefinition(field: GraphQLField<any, any>) {
        field.isDeprecated = true;
        field.deprecationReason = this.args.reason;
    }

    public visitEnumValue(value: GraphQLEnumValue) {
        value.isDeprecated = true;
        value.deprecationReason = this.args.reason;
    }
}


const dataGenerator = new DataGenerator();
const dataService = new DataService(dataGenerator);

interface QueryPostParameter {
    tag: string;
    authorId: number;
}

const resolvers = {
    Query: {        
        posts: (parent, { tag, authorId } : QueryPostParameter) => { 

            let result = dataService.getAllPosts();

            if (tag) {
                result = result.filter(post => post.tags.find(t => t === tag));
            }

            if (authorId) {
                result = result.filter(post => post.authorId === authorId);
            }

            return result; 
        },               
        authors: () => dataService.getAllAuthors(),
    },
    Mutation: {
        createPost: (parent, { post }) => {
            const newPost = dataService.addPost(+post.authorId, post.title, post.content, post.tags);
            pubsub.publish('POST_ADDED', { postAdded: newPost });
            return newPost;
        }
    },
    Post: {        
        author: (parent) => dataService.getAllAuthors().find(author => author.id === parent.authorId)
    },
    Author: {
        posts: author => dataService.getAllPosts().filter(post => post.authorId === author.id)
    },
    Subscription: {
        postAdded: {
            subscribe: (parent, args, { pubsub }) => {                
                return pubsub.asyncIterator(['POST_ADDED']);
            }
        }
    }   
};

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: importSchema('./src/schema.graphql'),
    resolvers: resolvers,
    context: { pubsub },
    schemaDirectives: {
        deprecated: DeprecatedDirective
    }
});

server.start(({ port }) => console.log(`server is running on localhost:${port}`));
