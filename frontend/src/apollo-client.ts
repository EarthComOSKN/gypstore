import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

import { createHttpLink } from 'apollo-link-http'
const uri =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000'
    : 'https://gyp-api-4r4kliwroa-an.a.run.app'

const httpLink = createHttpLink({ uri, fetch: !process.browser && fetch })

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('userToken')

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })

  // Call the next link in the middleware chain.
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
})

export default client
