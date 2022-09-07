import { EmptyLayout } from '@/components/layouts';
import axiosClient from '@/helpers/api';
import { AppPropsWithLayout } from '@/models';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
