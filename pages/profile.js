import Layout from '../components/Layout';
import Header from '../components/Header';

export default () => (
  <Layout header={<Header />}>
    <h1>I am in the profile</h1>
    <style jsx>{`
      h1 {
        margin-top: 50px;
      }
    `}</style>
  </Layout>
);
