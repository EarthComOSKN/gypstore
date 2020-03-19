import '../App.css'
import 'antd/dist/antd.min.css'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from '../src/apollo-client'

class MyApp extends App {
  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={ApolloClient}>
        <Head>></Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    )
  }
}

export default MyApp
