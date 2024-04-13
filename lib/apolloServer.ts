import { schema } from "@/modules/graphql/schema";
import { ApolloServer } from "apollo-server-micro";
import { prisma } from "./prisma";

const server = new ApolloServer({
  schema: schema,
  context: ({ req }) => ({ req, prisma }),
});

export { server };
