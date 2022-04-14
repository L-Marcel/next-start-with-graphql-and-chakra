import { graphQLSchema } from "../../graphql/server/schema";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PageConfig } from "next";
import { prismaClient } from "../../services/prisma";

import Cors from "micro-cors";


const cors = Cors();

export default cors(async function a(req, res) {
  const schema = await graphQLSchema;
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    introspection: true,
    context: {
      prisma: prismaClient
    }
  });
  await server.start();
  return await server.createHandler({
    path: "/api/graphql"
  })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};