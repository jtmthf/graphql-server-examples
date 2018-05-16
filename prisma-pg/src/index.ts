import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import { resolvers, fragmentReplacements } from "./resolvers";

declare const module: any;

const db = new Prisma({
  fragmentReplacements,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true
});

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({ ...req, db })
});

(async () => {
  const app = await server.start();

  console.log(`Server is running on http://localhost:${server.options.port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
})();
