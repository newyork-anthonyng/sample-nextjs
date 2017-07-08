import Header from '../Header';

const Layout = (props) => (
  <div>
    <style jsx global>{`
      body {
        font-family: Helvetica, sans-serif;
        margin: 0;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
);

export default Layout;
