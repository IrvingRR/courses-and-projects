import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import { User } from './db.js';
import { readFile } from 'fs/promises';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers.js';

const PORT = 9000;
const JWT_SECRET = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), express.json(), expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret: JWT_SECRET,
}));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne((user) => user.email === email);
  if (user && user.password === password) {
    const token = jwt.sign({ sub: user.id }, JWT_SECRET);
    res.json({ token });  
  } else {
    res.sendStatus(401);
  }
});

// Apollo Server
const typeDefs = await readFile('./schema.graphql', 'utf8');
const context = async ({ req }) => {
  if(req.auth) {
    const user = await User.findById(req.auth.sub);
    return { user };
  }

  return {};
}
const apolloServer = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers, context:context });
await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
