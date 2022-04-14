import { ApolloClient, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsContext } from "next";

export type ApolloClientContext = GetServerSidePropsContext;

export function getApolloClient(
  ctx?: ApolloClientContext, 
  ssrCache?: NormalizedCacheObject
) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/api/graphql',
    fetch,
  });
  
  const cache = new InMemoryCache().restore(ssrCache ?? {});
  
  return new ApolloClient({
    link: from([httpLink]),
    cache
  });
};