import { gql, ApolloServer } from "apollo-server";

// We create the graphQL Schema
const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

// We create the resolvers
const resolvers = {
    Query: {
        greeting: () => "Hello World!"
    }
}

// We create our server with ApolloServer
const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${ url }`)