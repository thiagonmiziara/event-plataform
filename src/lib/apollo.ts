import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o553y10nsb01z276jwe81u/master",
  cache: new InMemoryCache(),
});
