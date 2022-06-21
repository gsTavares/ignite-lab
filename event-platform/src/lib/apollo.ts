import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oj80pi0cqv01z4ban07we8/master',
    cache: new InMemoryCache()
})