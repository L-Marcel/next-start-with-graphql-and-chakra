import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../../prisma/generated/type-graphql";

export const graphQLSchema = buildSchema({
  resolvers,
  emitSchemaFile: true,
  validate: false
});