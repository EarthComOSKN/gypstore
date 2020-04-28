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

  componentDidMount() {
    const { OmiseCard } = window as any
    console.log('omise', OmiseCard)
    if (!OmiseCard) return
    OmiseCard.configure({
      publicKey: 'pkey_test_5jls5tfnoydtv5ybkrm',
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={ApolloClient}>
        <Head>
          <script src="https://cdn.omise.co/omise.js.gz"></script>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    )
  }
}

export default MyApp
