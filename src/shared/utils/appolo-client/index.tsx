import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfdu00ai0z5t01teckwv7c1h/master",
    cache: new InMemoryCache(),
});

export default client;