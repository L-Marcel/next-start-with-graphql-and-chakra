import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import { getApolloClient } from "../services/apollo";

export function withApollo<T>(Component: NextPage<T>) {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props}/>
      </ApolloProvider>
    );
  };
};
