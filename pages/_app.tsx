import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Layout from "src/components/layout";
import client from "src/shared/utils/appolo-client";

import "styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
