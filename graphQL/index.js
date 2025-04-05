const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Simulate extracting a user from token
    const auth = req.headers.authorization || "";
    const token = auth.replace("Bearer ", "");

    // For now, treat token like a userId
    const currentUserId = token;

    return { currentUserId };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
