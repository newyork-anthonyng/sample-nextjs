// @flow
import Head from 'next/head';

type Props = {
  header: React$Element<any>,
  children: React$Element<any>,
}

const Layout = (props: Props) => (
  <div>
    <Head>
      <title>Clone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>{`
      body {
        font-family: Helvetica, sans-serif;
        margin: 0;
      }
    `}</style>
    {props.header}
    {props.children}
  </div>
);

export default Layout;
