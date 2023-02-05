import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../footer';
import Header from '../header';
import ScrollTopButton from '../scroll-top-button';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const notLoadedUrl = ['/in-work'];
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      {!notLoadedUrl.includes(pathname) && <Header />}
      <main>{children}</main>
      {!notLoadedUrl.includes(pathname) && (
        <>
          <ScrollTopButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
