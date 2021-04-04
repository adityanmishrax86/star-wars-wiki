const { ApolloServer } = require("apollo-server");
// const mocks = require("./mocks");
const { typeDefs } = require("./schema/");
const resolvers = require("./schema/resolvers");

const { MainAPI } = require("./services");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            mainAPI: new MainAPI()
        }
    }
})

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
    `)
})